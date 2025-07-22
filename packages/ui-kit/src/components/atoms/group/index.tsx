import React from 'react';
import clsx from 'clsx';

import styles from './group.module.scss';

export interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: 'xs' | 'sm' | 'md' | 'lg';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    wrap?: boolean;
}

export const Group = (props: GroupProps) => {
    const {
        children,
        className,
        gap = 'md',
        align = 'center',
        justify = 'start',
        wrap = false,
        ...rest
    } = props;

    return (
        <div className={clsx(
            styles.group,
            styles[`gap-${gap}`],
            styles[`align-${align}`],
            styles[`justify-${justify}`],
            wrap && styles.wrap,
            className
        )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Group;
