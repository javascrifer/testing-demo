import React from 'react';
import { render } from '@testing-library/react';

import { Input, InputProps } from './input';

type RenderOptions = InputProps;

export const renderInput = (options?: RenderOptions) => {
  return render(<Input {...options} />);
};
