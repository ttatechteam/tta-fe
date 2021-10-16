import React, { HTMLInputTypeAttribute } from 'react'

import Image from "next/image";

import style from "./AppFormInputGroup.module.css"

const AppFormInputGroup = ({ type, placeholder, alt, iconSrc }: { type?: string, placeholder?: string, alt?: string, iconSrc: string }) => {
    return (
        <div className={style.form_group}>
            <Image height="35%" width="35%" className={style.icon} src={iconSrc} alt={alt} />
            <input className={style.form_input} id={style.auth_username} type={type} placeholder={placeholder} />
        </div>
    )
}

export default AppFormInputGroup
