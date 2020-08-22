import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <button onClick={() => setCount((bilangin) => bilangin + 1)}>+</button>
      {count}
      <input name="name" id="name" type="text" onChange={() => setName} />
      <input name="email" id="email" type="text" onChange={() => setEmail} />
      <input
        name="password"
        id="password"
        type="password"
        onChange={() => setPassword}
      />
      {(name, email, password)}
    </div>
  );
};

export default App;
