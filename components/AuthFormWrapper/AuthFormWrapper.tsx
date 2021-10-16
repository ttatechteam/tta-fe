import React from 'react'

import style from "./AuthFormWrapper.module.css"

const AuthFormWrapper = ({ children }: any) => {
    return (
        <form id={style.auth_page_form}>
            {children}
        </form>
    )
}

export default AuthFormWrapper
