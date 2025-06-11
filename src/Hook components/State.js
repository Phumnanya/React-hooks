import React, { useState } from 'react';

function State() {
  const [count, setCount] = useState(0); 
  const [isOn, setIsOn] = useState(false); // initialize to false

  return (
    <>
    <h3>useState hook</h3>
    <p>The useState hook in React is used to manage state in functional components. 
    Below are a few examples</p>
    <div>
    <h4>Basic Counter Example</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    <br />
    <div>
    <h4>Toggle Boolean Value</h4>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
    <br />
    <br />
    <br />
    <br />
    </>
  );
}

export default State;