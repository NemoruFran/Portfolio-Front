import {ReactElement} from "react";
import styles from "./Background.module.css";
import Script from 'next/script';
interface Props{
    children: ReactElement;
}

export default function Background (props:Props){
    return (
        <div className={styles.backgroundImage}>
            <div id="largeHeader" className={styles.largeHeader}>
                <canvas id="demo-canvas">
                    {props.children}
                </canvas>
            </div>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="text/javascript" src="../static/bgScript.js" ></script>
        </div>
    )
}

