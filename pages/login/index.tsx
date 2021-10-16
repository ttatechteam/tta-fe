import React from 'react'
import AppFormButton from '../../components/AppFormButton/AppFormButton'
import AppFormInputGroup from '../../components/AppFormInput/AppFormInputGroup'
import AuthContainer from '../../components/AuthContainer/AuthContainer'

//images
import UserNameIcon from "../../sharedImages/user-name.svg";
import EmailIcon from "../../sharedImages/email.svg";
import PasswordIcon from "../../sharedImages/password.svg";
import AuthFormWrapper from '../../components/AuthFormWrapper/AuthFormWrapper';

const LoginPage = () => {
    return (
        <div>
            <AuthContainer
                heading="Welcome back, Sign in"
                headingMessage="Kindly sign in to your account to access all TTA features"
                form={<LoginForm />}
                footerText="Dont have an account?"
                footerLinkText="Sign up"
                footerLinkUrl="/register" />
        </div>
    )
}



export const LoginForm = () => {
    return (
        <AuthFormWrapper>

            <AppFormInputGroup iconSrc={UserNameIcon} type="text" placeholder="Username or email" />

            <AppFormInputGroup iconSrc={PasswordIcon} type="password" placeholder="Password" />

            <AppFormButton>Sign In</AppFormButton>

        </AuthFormWrapper>
    )
}


export default LoginPage
