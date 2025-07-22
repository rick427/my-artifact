// packages/ui-kit/components/layout/Grid.tsx

import React from 'react';
import clsx from 'clsx';

import styles from './grid.module.scss';
import { useUITheme } from '../../../context';

export interface GridProps {
    children: React.ReactNode;
    spacing?: keyof ReturnType<typeof useUITheme>['spacing'];
    className?: string;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>>;
    className?: string;
}

export const Grid = ({ children, spacing = 'md', className }: GridProps) => {
    const theme = useUITheme();
    const style = {
        '--grid-spacing': theme.spacing[spacing],
    } as React.CSSProperties;

    return (
        <div className={clsx(styles.grid, className)} style={style}>
            {children}
        </div>
    );
};

const breakpointPrefixMap = {
    xs: 'col-xs-',
    sm: 'col-sm-',
    md: 'col-md-',
    lg: 'col-lg-',
    xl: 'col-xl-',
};

const Col = ({ children, span = {}, className = '', ...rest }: ColProps) => {
    const responsiveClasses = Object.entries(span).map(([breakpoint, value]) => {
        const prefix = breakpointPrefixMap[breakpoint as keyof typeof breakpointPrefixMap];
        return value ? `${prefix}${value}` : '';
    });

    return (
        <div className={clsx(styles.col, ...responsiveClasses, className)} {...rest}>
            {children}
        </div>
    );
};

Grid.Col = Col;

export default Grid;
