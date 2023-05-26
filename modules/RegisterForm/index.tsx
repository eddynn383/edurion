"use client";

import { useState } from "react";
import Button from '@/components/Button';
import Checkbox from "@/components/Checkbox";
import Label from "@/components/Label";
import Link from "next/link";
import Loading from "@/components/Loading";
import Icon from "@/components/Icon";
import Input from '@/components/Input';
import InputGroup from "@/components/InputGroup";
import Text from "@/components/Text";

import useFormValidation from "@/hooks/useFormValidation";

import sx from '@/styles/modules.module.scss';

const RegisterForm = ({ cn, theme, onSubmit, onSuccess }: any) => {

    const {
        email,
        setEmail,
        emailStatus,
        emailErrorMsg,
        password,
        setPassword,
        passwordStatus,
        passwordErrorMsg,
        passwordConfirm,
        setPasswordConfirm,
        passwordConfirmStatus,
        passwordConfirmErrorMsg,
        validate
    } = useFormValidation();

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!validate("register")) return;

        setLoading(false);

        onSubmit(email, password)
        setLoading(true);
    }

    return (
        <div className={cn}>
            {loading && <Loading />}
            <form className={sx["form_group"]} onSubmit={handleSubmit}>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="register_email" theme={theme}>Email</Label>
                        {emailStatus === "fail" && <div className={sx["form_error"]}><Text theme={theme} size="small" status={emailStatus}>{emailErrorMsg}</Text></div>}
                    </div>
                    <Input id="register_email" name="email" type="email" label="Email" placeholder="Enter your email" size="large" value={email} theme={theme} status={emailStatus} iconBefore={<Icon value="envelope" />} onChange={(e: any) => setEmail(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="register_password" theme={theme}>Password</Label>
                        {passwordStatus === "fail" && <div className={sx["form_error"]}><Text theme={theme} size="small" status={passwordStatus}>{passwordErrorMsg}</Text></div>}
                    </div>
                    <Input id="register_password" name="password" type={`${showPassword ? "text" : "password"}`} placeholder="Enter your password" size="large" value={password} status={passwordStatus} iconBefore={<Icon value={"key"} />} theme={theme} onChange={(e: any) => setPassword(e.target.value)} />
                </InputGroup>
                <InputGroup>
                    <div style={{ "display": "flex", "justifyContent": "space-between", "marginBottom": "4px" }}>
                        <Label htmlFor="register_confirm-password" theme={theme}>Confirm Password</Label>
                        {passwordConfirmStatus === "fail" && <div className={sx["form_error"]}><Text theme={theme} size="small" status={passwordConfirmStatus}>{passwordConfirmErrorMsg}</Text></div>}
                    </div>
                    <Input id="register_confirm-password" name="confirm password" type={`${showPassword ? "text" : "password"}`} placeholder="Confirm your password" size="large" value={passwordConfirm} status={passwordConfirmStatus} iconBefore={<Icon value={"key"} />} theme={theme} onChange={(e: any) => setPasswordConfirm(e.target.value)} />
                </InputGroup>
                <InputGroup style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                    <Checkbox checked={showPassword} indeterminate={false} theme={theme} onChange={() => setShowPassword((prev) => !prev)}>Show Password</Checkbox>
                </InputGroup>
                <Button size="large" type="submit" theme={theme}>Sign up</Button>
            </form>
            <p className={sx.link}>Already have an account? <Link href="/auth/login">Sign in</Link></p>

        </div>
    )
}

export default RegisterForm