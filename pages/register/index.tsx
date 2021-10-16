import React from 'react'
import AppFormButton from '../../components/AppFormButton/AppFormButton'
import AppFormInputGroup from '../../components/AppFormInput/AppFormInputGroup'
import AuthContainer from '../../components/AuthContainer/AuthContainer'

//images
import UserNameIcon from "../../sharedImages/user-name.svg";
import EmailIcon from "../../sharedImages/email.svg";
import PasswordIcon from "../../sharedImages/password.svg";
import AuthFormWrapper from '../../components/AuthFormWrapper/AuthFormWrapper'

const RegisterPage = () => {
    return (
        <div>
            <AuthContainer
                heading="Create Account"
                headingMessage="Kindly create your account to access all TTA features"
                form={<RegisterForm />}
                footerText="Already have an account?"
                footerLinkText="Sign in"
                footerLinkUrl="#" />
        </div>
    )
}



export const RegisterForm = () => {
    return (
        <AuthFormWrapper>
            {/* <div className={style.form_group}>
                        <Image layout="fill" width="8%" className={style.icon} src="/images/vectors/user-name.svg" />
                        <input className={style.form_input} id={style.auth_username} type="text" placeholder="Username" />
                    </div> */}

            <AppFormInputGroup iconSrc={UserNameIcon} type="text" placeholder="Username" />

            {/* <div className={style.form_group}>
                        <Image layout="fill" width="8%" className={style.icon} src="/images/vectors/email.svg" />
                        <input className={style.form_input} id={style.auth_email} type="email" placeholder="Email address" />
                    </div> */}

            <AppFormInputGroup iconSrc={EmailIcon} type="email" placeholder="Email address" />


            {/* <div className={style.form_group}>
                        <Image layout="fill" width="8%" className={style.icon} src="/images/vectors/password.svg" />
                        <input className={style.form_input} id={style.auth_password} type="password" placeholder="Password" />
                    </div> */}


            <AppFormInputGroup iconSrc={PasswordIcon} type="password" placeholder="Password" />


            <AppFormButton>Create Account</AppFormButton>
        </AuthFormWrapper>
    )
}


export default RegisterPage
