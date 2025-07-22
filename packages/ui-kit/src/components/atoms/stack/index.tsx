import React from 'react';
import clsx from 'clsx';

import styles from './stack.module.scss';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: 'xs' | 'sm' | 'md' | 'lg';
    align?: 'start' | 'center' | 'end' | 'stretch';
}

export const Stack = (props: StackProps) => {
    const { children, className, gap = 'md', align = 'start', ...rest} = props;
    return (
        <div className={clsx(
            styles.stack,
            styles[`gap-${gap}`],
            styles[`align-${align}`],
            className
        )}
            {...rest}
        >
            {children}
        </div>
    );
};
export default Stack;
