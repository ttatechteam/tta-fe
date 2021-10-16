import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
                    <link
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                        rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,600&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                        rel="stylesheet" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,600&family=Nunito:wght@200;300;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                        rel="stylesheet" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,600&family=Nunito:wght@200;300;600;700&family=Rubik:wght@600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                        rel="stylesheet" />


                </Head>


                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument