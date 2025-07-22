//import { Button } from '@richardnjoku/ui-kit';

import styles from "./home.module.scss";

import Hero from "@components/pages/home/hero";
import withLayout from '@components/shared/with-layout';

const Home = () => {
    return (
        <section className={styles.section}>
            <Hero />
            {/* <h1>🧪 UI Kit Demo</h1>
            <Button 
                variant="outline" 
                onClick={() => alert('Button works!')}
            >
                Click Me
            </Button> */}
        </section>
    );
}
export default withLayout(Home);
