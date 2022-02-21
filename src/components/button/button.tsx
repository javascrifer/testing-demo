import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import { TestId } from '../../types';

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HTMLButtonProps {
  testId?: TestId;
}

export const Button: FC<ButtonProps> = ({
  children,
  testId,
  type,
  ...buttonProps
}) => {
  return (
    <button data-testid={testId} type={type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  );
};

Button.defaultProps = { testId: TestId.Button };
