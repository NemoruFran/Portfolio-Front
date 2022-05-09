import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <div id="header" className={styles.header}>
            <Link href={"/projects"}>
                <p className="text-white">click aqui para ir a projects lol</p>
            </Link>
            <Link href="/">
                <p className="text-white">click aquí pa volver a la principal tonto</p>
            </Link>
        </div>
    )
}

export default Header;