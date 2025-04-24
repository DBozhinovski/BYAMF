import { useState } from "react";

export default function Basic() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo">
      <h1>Hello from Patches! (Home)</h1>
      <div className="counter demo">
        <h2>Counter Example</h2>
        <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
}
