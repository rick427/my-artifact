// packages/ui-kit/src/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children, ...props }:ButtonProps) => (
  <button style={{ padding: '10px 20px', borderRadius: 6, background: '#0047AB', color: '#fff' }} {...props}>
    {children}
  </button>
);
