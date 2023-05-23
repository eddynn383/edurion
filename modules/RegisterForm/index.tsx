"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Input from '@/components/Input';
import InputGroup from "@/components/InputGroup";
import Checkbox from "@/components/Checkbox";
import Button from '@/components/Button';
import Alert from "@/components/Alert";
import Icon from "@/components/Icon";

import sx from '@/styles/modules.module.scss';
import Label from "@/components/Label";
import { Status } from "@/interfaces/global";
import Text from "@/components/Text";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const RegisterForm = ({ cn, theme, onSubmit, onSuccess }: any) => {
    const [email, setEmail] = useState('');
    const [emailStatus, setEmailStatus] = useState<Status>('default');
    const [emailErrorMsg, setEmailErrorMsg] = useState('')

    const [password, setPassword] = useState('')
    const [passwordStatus, setPasswordStatus] = useState<Status>('default');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordConfirmStatus, setPasswordConfirmStatus] = useState<Status>('default');
    const [passwordConfirmErrorMsg, setPasswordConfirmErrorMsg] = useState('')


    const [showPassword, setShowPassword] = useState(false);

    const checkedEmail = EMAIL_REGEX.test(email)
    const checkedPassword = PASS_REGEX.test(password)
    const confirmPassword = password === passwordConfirm ? true : false

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!(email.length >= 1)) {
            setEmailErrorMsg('Enter the email')
            setEmailStatus('fail')
            return
        } else {
            if (!checkedEmail) {
                setEmailErrorMsg('The email is not valid!')
                setEmailStatus('fail')
                return
            } else {
                setEmailStatus('success')
            }
        }

        if (!(password.length >= 8)) {
            setPasswordErrorMsg('The password should contain at least 8 characters')
            setPasswordStatus('fail')
            return
        } else {
            if (!checkedPassword) {
                setPasswordErrorMsg('The password entered is not valid!')
                setPasswordStatus('fail')
                return
            } else {
                setPasswordStatus('success')
            }
        }

        if (!confirmPassword) {
            setPasswordConfirmErrorMsg('The passwords don\'t match. Try again!')
            setPasswordConfirmStatus('fail')
            return
        } else {
            setPasswordConfirmStatus('success')
        }

        onSubmit(email, password)
    }

    return (
        <div className={cn}>
            {/* {
                showError &&
                <Alert status="fail" variant="standard" position="absolute" action={<Button type="button" size="xsmall" variant="text" status="fail" content="icon" onClick={() => setShowError(false)} theme={theme}><Icon value="close" /></Button>}>
                    <Alert.Title>Error</Alert.Title>
                    <Alert.Description>{errorMsg}</Alert.Description>
                </Alert>
            }
            {
                onSuccess &&
                <Alert status="success" variant="standard" position="absolute" action={<Button type="button" size="xsmall" variant="text" status="fail" content="icon" onClick={() => setShowError(false)} theme={theme}><Icon value="close" /></Button>}>
                    <Alert.Title>Success</Alert.Title>
                    <Alert.Description>The user was successfully registred</Alert.Description>
                </Alert>
            } */}
            <form className={sx["form_group"]} onSubmit={handleSubmit}>
                <InputGroup>
                    <Label htmlFor="register_email" theme={theme}>Email</Label>
                    <Input id="register_email" name="email" type="email" label="Email" placeholder="Enter your email" size="large" value={email} theme={theme} status={emailStatus} iconBefore={<Icon value="envelope" />} onChange={(e: any) => setEmail(e.target.value)} />
                    {emailStatus === "fail" && <div className={sx["form_error"]}><Text theme={theme} status={emailStatus}>{emailErrorMsg}</Text></div>}
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="register_password" theme={theme}>Password</Label>
                    <Input id="register_password" name="password" type={`${showPassword ? "text" : "password"}`} placeholder="Enter your password" size="large" value={password} status={passwordStatus} iconBefore={<Icon value={checkedPassword === true ? "lock" : "unlock"} />} theme={theme} onChange={(e: any) => setPassword(e.target.value)} />
                    {passwordStatus === "fail" && <div className={sx["form_error"]}><Text theme={theme} status={passwordStatus}>{passwordErrorMsg}</Text></div>}
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="register_confirm-password" theme={theme}>Confirm Password</Label>
                    <Input id="register_confirm-password" name="confirm password" type={`${showPassword ? "text" : "password"}`} placeholder="Confirm your password" size="large" value={passwordConfirm} iconBefore={<Icon value={confirmPassword === true ? "lock" : "unlock"} />} theme={theme} onChange={(e: any) => setPasswordConfirm(e.target.value)} />
                    {passwordConfirmStatus === "fail" && <div className={sx["form_error"]}><Text theme={theme} status={passwordConfirmStatus}>{passwordConfirmErrorMsg}</Text></div>}
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