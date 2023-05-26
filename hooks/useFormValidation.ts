import { useState } from 'react';
import { Status } from "@/interfaces/global";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const validateEmail = (email: string): [Status, string] => {
    const checkedEmail = EMAIL_REGEX.test(email)

    if (email.length === 0) {
        return ['fail', 'Enter the email'];
    }
    if (!checkedEmail) {
        return ['fail', 'Email invalid!'];
    }
    // add more sophisticated email validation if needed
    return ['success', ''];
}

const validatePassword = (password: string): [Status, string] => {
    const checkedPassword = PASS_REGEX.test(password)
    if (password.length === 0) {
        return ['fail', 'Enter the password'];
    }
    if (!checkedPassword) {
        return ['fail', 'The inserted passoword is invalid!'];
    }
    // add more sophisticated password validation if needed
    return ['success', ''];
}

const validatePasswordConf = (password: string, confirm: string): [Status, string] => {
    const confirmPassword = password === confirm ? true : false
    if (password.length === 0) {
        return ['fail', 'Enter the password confirmation'];
    }

    if (!confirmPassword) {
        return ['fail', 'The entered password did not match!'];
    }
    // add more sophisticated password validation if needed
    return ['success', ''];
}

const useFormValidation = () => {
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState<Status>('default');
    const [emailErrorMsg, setEmailErrorMsg] = useState('')

    const [password, setPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState<Status>('default');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordConfirmStatus, setPasswordConfirmStatus] = useState<Status>('default');
    const [passwordConfirmErrorMsg, setPasswordConfirmErrorMsg] = useState('')

    const validate = (type: string): boolean => {
        const [validEmailStatus, validEmailMsg] = validateEmail(email);
        setEmailStatus(validEmailStatus);
        setEmailErrorMsg(validEmailMsg);

        const [validPasswordStatus, validPasswordMsg] = validatePassword(password);
        setPasswordStatus(validPasswordStatus);
        setPasswordErrorMsg(validPasswordMsg);

        const [validPasswordConfStatus, validPasswordConfMsg] = validatePasswordConf(password, passwordConfirm);
        setPasswordConfirmStatus(validPasswordConfStatus);
        setPasswordConfirmErrorMsg(validPasswordConfMsg);

        const loginValidation = validEmailStatus === 'success' && validPasswordStatus === 'success';
        const registerValidation = validEmailStatus === 'success' && validPasswordStatus === 'success' && validPasswordConfStatus === 'success';

        return type === "register" ? registerValidation : loginValidation;
    }

    return {
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
    };
}

export default useFormValidation;