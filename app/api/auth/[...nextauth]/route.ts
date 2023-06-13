import NextAuth, { NextAuthOptions, Profile } from "next-auth";


import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prismadb";

import { compare } from "bcrypt";

import theme from "@/lib/theme.json";

if (!process.env.NEXTAUTH_SECRET) {
    throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;

if (!googleClientId || !googleClientSecret || !githubClientId || !githubClientSecret) {
    throw new Error("Required environment variables are missing");
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "example@email.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            // @ts-ignore
            async authorize(credentials, request) {

                console.log("CREDENTIALS:", credentials)

                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) {
                    throw new Error("No user found");
                }

                if (user.password === null) {
                    throw new Error("User password is null");
                }

                const passwordValid = compare(credentials.password, user.password);

                if (!passwordValid) {
                    throw new Error("Invalid password");
                }

                return user
            },
        }),
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        }),
        GithubProvider({
            clientId: githubClientId,
            clientSecret: githubClientSecret
        }),
    ],
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        async session({ session, token }) {
            console.log("Session before:", session)

            const ret = {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    imageLarge: token.imageLarge,
                    roles: token.roles
                }
            }

            console.log("Session after:", ret)
            return ret
        },
        async jwt({ token, user }) {
            console.log("Token before:", token)
            console.log("User before:", user)
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    imageLarge: u.imageLarge,
                    roles: u.roles
                }
            }
            console.log("Token after:", token)
            return token;
        },
        async signIn({ user, account, profile }) {
            const smallAvatar = user.image
            let largeAvatar;

            if (account?.provider === 'google') {
                largeAvatar = smallAvatar?.split('=')[0] + "=s256"
            } else {
                largeAvatar = smallAvatar
            }

            console.log("++++++++ SIGN IN +++++++++")
            console.log("USER: ", user)
            console.log("USER AVATAR: ", largeAvatar)
            console.log("ACCOUNT: ", account)
            console.log("PROFILE: ", profile)
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: user.email
                }
            });

            if (!existingUser) {
                const newUser = await prisma.user.create({
                    data: {
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        imageLarge: largeAvatar, // Modify the image URL for larger size
                    },
                })

                if (account) {
                    await prisma.account.create({
                        data: {
                            type: account.type,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                            access_token: account.access_token,
                            expires_at: account.expires_at,
                            scope: account.scope,
                            token_type: account.token_type,
                            id_token: account.id_token,
                            user: {
                                connect: {
                                    id: newUser.id,
                                }
                            },

                        }
                    })
                }
                // if (profile) {
                await prisma.profile.create({
                    data: {
                        user: {
                            connect: {
                                email: profile?.email
                            }
                        }
                    }
                })
                // }

                await prisma.userPreferences.create({
                    data: {
                        themeMode: "light",
                        theme: {
                            create: {
                                defaultStyle: {
                                    light: theme.light,
                                    dark: theme.dark
                                },
                                customStyles: {},
                            },
                        },
                        user: {
                            connect: {
                                id: newUser.id,
                            }
                        },
                        paymentMethods: "{}",
                    }
                });
            }

            return Promise.resolve(true);
        }

    },
    debug: process.env.NODE_ENV === "development",

    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
