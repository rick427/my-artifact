import { Stack, Button, Group } from "@richardnjoku/ui-kit";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Stack gap="xs" align="center">
                <h1 className={styles.hero__subtitle}>
                    Trusted by over 500+ customers
                </h1>
                <h2 className={styles.hero__title}>
                    Design system that works
                </h2>
            </Stack>
            <Stack gap="lg" align="center">
                <p className={styles.hero__text}>
                    <span>@richardnjoku/ui-kit</span> helps you craft accessible, responsive interfaces with 
                    ease powered by tokens, themes, and a clean API designed for real-world speed.
                    Build, prototype and customize any design, Neat and simple, just in minutes
                </p>
                <Group>
                    <Button>Preview</Button>
                    <Button>Get RNjokUi</Button>
                </Group>
            </Stack>

            <img className={styles.hero__img} src="/assets/hero.png" alt="hero" />
        </section>
    )
}
