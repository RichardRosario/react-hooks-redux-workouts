import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(2);

  return (
    <div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      {count}
    </div>
  );
};

export default App;
