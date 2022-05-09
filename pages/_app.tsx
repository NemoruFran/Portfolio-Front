import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Background from "../components/Background";
import Head from "next/head";
import Script from "next/script";
import {useEffect} from "react";
// @ts-ignore
import graphPointsMouse from './bgScript';


function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        graphPointsMouse({a:0,b:0,c:0},{a:0,b:0,c:0});
    },[])

    return(
        <div>
            <Header />
            <Background>
                <Component {...pageProps} />
            </Background>
        </div>
    )
}

export default MyApp
