import { Button } from '@richardnjoku/ui-kit';

import styles from "./home.module.scss";
import withLayout from '@components/with-layout';

const Home = () => {
    return (
        <section className={styles.section}>
            <h1>🧪 UI Kit Demo</h1>
            <Button 
                variant="outline" 
                onClick={() => alert('Button works!')}
            >
                Click Me
            </Button>
        </section>
    );
}
export default withLayout(Home);
