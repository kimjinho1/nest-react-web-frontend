import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello React</h1>
      <Button text={"Hello props"} />
    </div>
  );
}

export default App;
