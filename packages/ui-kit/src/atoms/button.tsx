// packages/ui-kit/src/atoms/Button.tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }:ButtonProps) => (
  <button style={{ padding: '10px 20px', cursor: "pointer", borderRadius: 6, background: 'red', color: '#fff' }} {...props}>
    {children}
  </button>
);
