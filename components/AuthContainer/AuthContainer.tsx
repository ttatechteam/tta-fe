import React from 'react'
import style from "./AuthContainer.module.css";
import Image from "next/image";


//images
import BackImage from "../../sharedImages/back.png";
import CofbLogo from "../../sharedImages/cofb_logo.png";

const AuthContainer = ({ form, footerText, footerLinkUrl, footerLinkText, heading, headingMessage }:
    { form: any, footerText: string, footerLinkUrl: string, footerLinkText: string, heading: string, headingMessage: string }) => {
    return (
        <div id={style.auth_page_wrapper}>
            <div id={style.auth_page_left_box}>

                <div id={style.left_box_content}>
                    <div className={style.transparent_box}>
                        <h1>The Transformation Arena Youth Church</h1>
                    </div>

                    <Image layout="intrinsic" src={CofbLogo} />
                </div>
            </div>
            <div id={style.auth_page_right_box}>

                <a id={style.auth_page_back} href="#"> <Image src={BackImage} layout="intrinsic" alt="back" /> </a>

                <Image layout="intrinsic" id={style.auth_page_logo} src={CofbLogo} />

                <h2 id={style.auth_page_header}>{heading}</h2>
                <p id={style.auth_page_message}>{headingMessage}</p>

                {form}

                <footer id={style.auth_page_footer}>
                    <span>{footerText}</span> <a href={footerLinkUrl}>{footerLinkText}</a>
                </footer>
            </div>
        </div>
    )
}

export default AuthContainer
