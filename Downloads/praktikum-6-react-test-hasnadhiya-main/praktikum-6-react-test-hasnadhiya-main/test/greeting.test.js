import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './greeting';

  test('renders greeting with name', () => {
    render(<Greeting name="nad" />);
    const greetingElement = screen.getByText('Hello, nad');
    expect(greetingElement).toBeInTheDocument();
  });
