import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__logo}>
                RNjokuUI
            </h1>
        </header>
    )
}
