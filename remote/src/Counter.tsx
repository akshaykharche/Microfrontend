import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "red" }}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
