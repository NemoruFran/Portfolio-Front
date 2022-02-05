import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Background from "../components/Background";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {

    return(
        <div>
            <Head>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script type="text/javascript" src="../static/bgScript.js" ></script>
            </Head>
            <Header />
            <Background>
                <Component {...pageProps} />
            </Background>
        </div>
    )
}

export default MyApp
