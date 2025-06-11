import React, { useRef, useState } from 'react';

function Ref() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [value, setValue] = useState('');

  renderCount.current += 1; // This won't trigger re-render

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM element and focus it
  };

  return (
    <>
    <h3>useRef</h3>
    <p>The useRef hook in React is commonly used for:
Accessing DOM elements directly. Persisting values across renders without causing re-renders. 
Here are some practical examples:</p>
    <div>
    <h4>Accessing a DOM Element</h4>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
    <br />
    <div>
    <h4>Storing Mutable Values without Causing Re-renders</h4>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Type something" 
      />
      <p>Render Count: {renderCount.current}</p>
    </div>
    <br />
    <br />
    <br />
    <br />
    </>
  );
}

export default Ref;
