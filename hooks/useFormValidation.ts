import { useState } from 'react';
import { Status } from "@/interfaces/global";

const validateEmail = (email: string): [Status, string] => {
    if (email.length === 0) {
        return ['fail', 'Enter the email'];
    }
    // add more sophisticated email validation if needed
    return ['success', ''];
}

const validatePassword = (password: string): [Status, string] => {
    if (password.length === 0) {
        return ['fail', 'Enter the password'];
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

    const validate = (): boolean => {
        const [validEmailStatus, validEmailMsg] = validateEmail(email);
        setEmailStatus(validEmailStatus);
        setEmailErrorMsg(validEmailMsg);

        const [validPasswordStatus, validPasswordMsg] = validatePassword(password);
        setPasswordStatus(validPasswordStatus);
        setPasswordErrorMsg(validPasswordMsg);

        return validEmailStatus === 'success' && validPasswordStatus === 'success';
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
        validate
    };
}

export default useFormValidation;