import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { TestId } from '../../types';

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends HTMLInputProps {
  testId?: TestId;
}

export const Input: FC<InputProps> = ({
  children,
  testId,
  type,
  ...inputProps
}) => {
  return <input data-testid={testId} type={type ?? 'text'} {...inputProps} />;
};

Input.defaultProps = { testId: TestId.Input };
