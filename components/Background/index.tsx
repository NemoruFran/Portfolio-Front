import {ReactElement} from "react";
import styles from "./Background.module.css";
import Script from 'next/script';
interface Props{
    children: ReactElement;
}

export default function Background (props:Props){
    return (
        <div>
            <div id="largeHeader">
                <canvas id="demo-canvas" className="absolute z-0" />
                <div className={styles.largeHeader}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

