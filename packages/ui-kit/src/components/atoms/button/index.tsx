//packages/ui-kit/button

import React from 'react';

import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button = (props:ButtonProps) => {
    const { children, variant = 'primary', className = '', ...rest} = props;

    const combinedClassName = [
        styles.button,
        styles[`button--${variant}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <button className={combinedClassName} {...rest}>
            {children}
        </button>
    );
};
