export { default } from "next-auth/middleware"

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// import { withAuth } from 'next-auth/middleware';

// export default withAuth(
//     // `withAuth` augments your `Request` with the user's token.
//     function middleware(req) {
//         console.log(req.nextauth.token)
//     },
//     {
//         callbacks: {
//             authorized: ({ token }) => {
//                 const roles = token?.role as string[]; // Perform type assertion to string[]

//                 console.log("SHOW ROLE", roles)
//                 // console.log("CHECK ROLE", roles.includes("ADMIN"))

//                 return !!token;
//             }
//         },
//     }
// )

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/catalog', request.url));
// }

export const config = {
    // secret: process.env.NEXTAUTH_SECRET,
    matcher: [

        /*
        * Match all request paths except for the ones starting with:
        * - auth
        * - api (API routes)
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - favicon.ico (favicon file)
        */

        // '/((?!auth|catalog|settings|api|_next/static|_next/image|favicon.ico).*)'
        '/catalog'
    ]
}