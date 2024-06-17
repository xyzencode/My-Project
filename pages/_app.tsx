// pages/_app.js
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: any) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp