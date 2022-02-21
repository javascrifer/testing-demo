import React from 'react';
import { render } from '@testing-library/react';

import { Button, ButtonProps } from './button';

type RenderOptions = ButtonProps;

export const renderButton = (options?: RenderOptions) => {
  return render(<Button {...options} />);
};
