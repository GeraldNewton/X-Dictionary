import { useState } from "react";

function App() {
  const [state, setState] = useState({
    definition: "",
    dis: false,
  });
  const customDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleForm = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, dis: false }));
    const word = e.target.elements["input"].value;
    const def = customDictionary.find(
      (val) => val.word.toLowerCase() === word.toLowerCase()
    );
    def
      ? setState({ dis: true, definition: def.meaning })
      : setState({ dis: true, definition: "" });
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="input" placeholder="Search for a word..."/>
        <button type="submit">Search</button>
      </form>
      <strong>Definition:</strong>
      {state.dis &&
        (state.definition !== "" ? (
          <p>{state.definition}</p>
        ) : (
          <p>Word not found in the dictionary.</p>
        ))}
    </>
  );
}

export default App;