import React from 'react'
import Head from 'next/head'
const AppMainWrapper = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>The Transformation Arena (TTA)</title>
                <meta name="description" content="The Redeemed Christian Church of God - The Transformation Arena" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="manifest.json"></link>
            </Head>
            {children}
        </>
    )
}

export default AppMainWrapper
