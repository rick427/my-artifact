// demo-app/hoc/withLayout.tsx
import React from 'react';
import Header from '../header';
import Footer from '../footer';

const withLayout = <P extends object>(Component: React.ComponentType<P>) => {
    const WrappedComponent = (props: P) => {
        return (
            <>
                <Header />
                <main style={{ minHeight: '85vh' }}>
                    <Component {...props} />
                </main>
                <Footer />
            </>
        );
    };

    return WrappedComponent;
};

export default withLayout;
