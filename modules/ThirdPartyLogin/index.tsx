import { signIn } from "next-auth/react";
import Image from "next/image";
import Button from '@/components/Button';
import Google from "@/public/assets/images/google.svg";
import Github from "@/public/assets/images/github.svg";
import { IPropsThirdPartyLogin } from "./interface";

const ThirdPartyLogin = ({ theme }: IPropsThirdPartyLogin) => {

    // Google Handler function
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: process.env.APP_URL })
    }

    // Google Handler function
    async function handleGithubSignin() {
        signIn('github', { callbackUrl: process.env.APP_URL })
    }

    return (
        <div style={{ 'display': 'flex', 'gap': '16px' }}>
            <Button size="large" type="button" variant="neutral" status="neutral" surface="2" theme={theme} style={{ "width": "100%" }} onClick={handleGoogleSignin}><Image src={Google} alt="Google" width="16" /> Google</Button>
            <Button size="large" type="button" variant="neutral" status="neutral" surface="2" theme={theme} style={{ "width": "100%" }} onClick={handleGithubSignin}><Image src={Github} alt="Github" width="16" /> Github</Button>
        </div>
    )
}

export default ThirdPartyLogin