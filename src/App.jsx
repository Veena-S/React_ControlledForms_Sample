import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const inputName = event.target.value;

    console.log(inputName);

    if (inputName.match(/^[a-zA-Z]+$/)) {
      setName(inputName);
    }
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <div>name: {name}</div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Form/>
    </div>
  );
}
