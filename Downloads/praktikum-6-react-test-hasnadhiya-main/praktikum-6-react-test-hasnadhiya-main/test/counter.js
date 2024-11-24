import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0); //nambahin fungsi reset
  const showAlert = () => alert('Button clicked!'); //fungsi alert



  return (
    <div>
      <h1 data-testid="count-value">{count}</h1>
      <button data-testid="increment-button" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={decrement}>
        Decrement
      </button>
      <button data-testid="reset-button" onClick={reset}>{/*tombol reset */}
        Reset
      </button>
      <button data-testid="alert-button" onClick={showAlert}>
        Show Alert
      </button>
    </div>
  );
};

export default Counter;
