import React from 'react'
import style from "./AppFormButton.module.css"

const AppFormButton = ({ children }: any) => {
    return (
        <button id={style.auth_form_btn}>{children}</button>
    )
}

export default AppFormButton
