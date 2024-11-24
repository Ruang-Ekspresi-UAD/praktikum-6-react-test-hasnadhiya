import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
      render(<Counter />);
      const countValue = screen.getByTestId('count-value');
      expect(countValue).toHaveTextContent('0');
    });
  
    test('increments count when increment button is clicked', () => {
      render(<Counter />);
      const countValue = screen.getByTestId('count-value');
      const incrementButton = screen.getByTestId('increment-button');
  
      fireEvent.click(incrementButton);
  
      expect(countValue).toHaveTextContent('1');
    });
  
    test('decrements count when decrement button is clicked', () => {
      render(<Counter />);
      const countValue = screen.getByTestId('count-value');
      const decrementButton = screen.getByTestId('decrement-button');
  
      fireEvent.click(decrementButton);
  
      expect(countValue).toHaveTextContent('-1');
    });

    test('resets count when reset button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('count-value');
        const incrementButton = screen.getByTestId('increment-button');
        const resetButton = screen.getByTestId('reset-button');
      
        // Tambah angka dulu
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
      
        expect(countValue).toHaveTextContent('2'); // Pastikan nilai bertambah
      
        // Klik tombol reset
        fireEvent.click(resetButton);
      
        expect(countValue).toHaveTextContent('0'); // Pastikan nilai kembali ke 0
      });
      
      test('calls alert when alert button is clicked', () => {
        window.alert = jest.fn(); // Mock fungsi alert
        render(<Counter />);
        const alertButton = screen.getByTestId('alert-button');
      
        fireEvent.click(alertButton);
      
        expect(window.alert).toHaveBeenCalledWith('Button clicked!');
      });
      
  });