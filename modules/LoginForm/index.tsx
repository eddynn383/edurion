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
import Loading from "@/components/Loading";
import Form from "@/components/Form";
import ThirdPartyLogin from "@/modules/ThirdPartyLogin";
import useFormValidation from "@/hooks/useFormValidation";

import sx from '@/styles/modules.module.scss';

const LoginForm = ({ cn }: any) => {

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
            <ThirdPartyLogin />
            <span className={sx["form_separator"]}>or continue with email</span>
            <Form cn={sx["form_group"]} onSubmit={handleSubmit}>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="login_email">Email</Label>
                        {emailStatus === "fail" && <div className={sx["form_error"]}>
                            <Text size="small" status={emailStatus}>{emailErrorMsg}</Text>
                        </div>}
                    </div>
                    <Input id="login_email" name="email" type="email" placeholder="Enter your email" shade="200" size="L" value={email} status={emailStatus} iconBefore={<Icon value="envelope" />} onChange={handleChangeEmail} />
                </InputGroup>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="login_password">Password</Label>
                        {passwordStatus === "fail" && <div className={sx["form_error"]}>
                            <Text size="small" status={passwordStatus}>{passwordErrorMsg}</Text>
                        </div>}
                    </div>
                    <Input id="login_password" name="password" type={`${showPassword ? "text" : "password"}`} placeholder="Enter your password" shade="200" size="L" value={password} iconBefore={<Icon value="lock" />} status={passwordStatus} onChange={handleChangePassword} />
                </InputGroup>
                <InputGroup style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                    <Checkbox id="login" checked={showPassword} indeterminate={false} onChange={() => setShowPassword((prev) => !prev)}>Show Password</Checkbox>
                    <Link href="/auth/forgot-password">Forgot Password?</Link>
                </InputGroup>
                <Button type="submit" mode="primary" size="L">Sign in</Button>
            </Form>
            <p className={sx.link}>Don't have an account yet? <Link href="/auth/register">Sign up</Link></p>
        </div>
    )
}

export default LoginForm