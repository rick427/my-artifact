import { Group } from "@richardnjoku/ui-kit";

import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Group gap="lg">
                <h1 className={styles.header__logo}>
                    RNjokUI.
                </h1>
                <span>Version 0.1.0</span>
                <span>22 components</span>
            </Group>

            <nav className={styles.header__nav}>
                <ul className={styles.header__list}>
                    <li className={styles.header__list__item}>Updates</li>
                    <li className={styles.header__list__item}>Tutorial</li>
                    <li className={styles.header__list__item}>Preview</li>
                    <li className={styles.header__list__button}>Use Design System</li>
                </ul>
            </nav>
        </header>
    )
}
