import React from 'react';
import Custom from './Custom';

function CustomHookUsage() {
  const { count, increment, decrement, reset } = Custom(10);

  return (
    <div>
    <h4>Custom hook</h4>
    <p>Custom hooks in React are a great way to reuse stateful logic between components. They are just JavaScript 
    functions that use other React hooks (useState, useEffect, etc.)</p>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>🔁</button>
    </div>
  );
}

export default CustomHookUsage;