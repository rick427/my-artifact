// packages/ui-kit/button

import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button = (props:ButtonProps) => {
    const { children, variant = 'primary', className, ...rest} = props;
    return (
        <button
            className={clsx(
                styles.button,
                styles[`button--${variant}`],
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
