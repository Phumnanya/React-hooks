import React, { useEffect, useState } from 'react';

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); // runs when count changes

  return (
  <>
  <h4>useEffect</h4>
  <p>The result of this is rendered on the console</p>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  <br />
    <br />
    <br />
    <br />
  </>
  );
}

export default Effect;