"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from '@/components/Button';
import Checkbox from "@/components/Checkbox";
import Label from "@/components/Label";
import Link from "@/components/Link";
import Icon from "@/components/Icon";
import Input from '@/components/Input';
import InputGroup from "@/components/InputGroup";
import Text from "@/components/Text";
import ThirdPartyLogin from "@/modules/ThirdPartyLogin";
import useFormValidation from "@/hooks/useFormValidation";

import sx from '@/styles/modules.module.scss';
import Loading from "@/components/Loading";

const LoginForm = ({ cn, theme }: any) => {

    const { email, setEmail, emailStatus, emailErrorMsg, password, setPassword, passwordStatus, passwordErrorMsg, validate } = useFormValidation();
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validate("login")) return;
        console.log("test")

        console.log(email)
        console.log(password)

        setLoading(true);

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: "/",
        })

        setLoading(false);
    }

    const handleChangeEmail = (e: any) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleChangePassword = (e: any) => {
        const { value } = e.target;
        setPassword(value);
    };

    return (
        <div className={cn}>
            {loading && <Loading />}
            <ThirdPartyLogin theme={theme} />
            <span className={sx["form_separator"]}>or continue with email</span>
            <form className={sx["form_group"]} onSubmit={handleSubmit}>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="login_email" theme={theme}>Email</Label>
                        {emailStatus === "fail" && <div className={sx["form_error"]}>
                            <Text theme={theme} size="small" status={emailStatus}>{emailErrorMsg}</Text>
                        </div>}
                    </div>
                    <Input id="login_email" name="email" type="email" placeholder="Enter your email" size="large" value={email} theme={theme} status={emailStatus} iconBefore={<Icon value="envelope" />} onChange={handleChangeEmail} />
                </InputGroup>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="login_password" theme={theme}>Password</Label>
                        {passwordStatus === "fail" && <div className={sx["form_error"]}>
                            <Text theme={theme} size="small" status={passwordStatus}>{passwordErrorMsg}</Text>
                        </div>}
                    </div>
                    <Input id="login_password" name="password" type={`${showPassword ? "text" : "password"}`} placeholder="Enter your password" size="large" value={password} iconBefore={<Icon value="lock" />} theme={theme} status={passwordStatus} onChange={handleChangePassword} />
                </InputGroup>
                <InputGroup style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                    <Checkbox checked={showPassword} indeterminate={false} theme={theme} onChange={() => setShowPassword((prev) => !prev)}>Show Password</Checkbox>
                    <Link href="/forgot-password" >Forgot Password?</Link>
                </InputGroup>
                <Button size="large" type="submit" theme={theme}>Sign in</Button>
            </form>
            <p className={sx.link}>Don't have an account yet? <Link href="/auth/register">Sign up</Link></p>
        </div>
    )
}

export default LoginForm