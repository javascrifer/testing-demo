import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({ children, type, ...buttonProps }) => {
  return (
    <button type={type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  );
};
