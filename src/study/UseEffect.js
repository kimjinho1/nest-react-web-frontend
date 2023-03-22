import { useState, useEffect } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => console.log("Run only one"), []);
  useEffect(() => console.log("run when counter changes"), [counter]);
  useEffect(() => console.log("run when keyword changes"), [keyword]);
  useEffect(
    () => console.log("run when keyword & counter changes"),
    [counter, keyword]
  );
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default UseEffect;
