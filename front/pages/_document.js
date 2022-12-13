import Document, { Html, Head, Main, NextScript } from 'next/document'

export default  class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head/>
                <title>IVE</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Inventario de vacunación de empleados" />
                <meta name = "apple-mobile-web-app-capable" content = "yes" />  
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="img/kruger_.png"></link>
                <link rel="shortcut icon" href="img/kruger_.png" />
                <meta name = "apple-mobile-web-app-capable" content = "yes" />  
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
                <body>
                    <NextScript />
                    <Main />
                </body>
            </Html>
        )
    }
}