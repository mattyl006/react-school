import './App.css';
import Button from "./components/Button";

const alizarin = "#e74c3c";
const turquoise = "#1abc9c";

function App() {
  return (
      <main className="App">
        <h1>Hello react-architecture!</h1>
          <Button color={alizarin} bgColor={turquoise}>Click me!</Button>
      </main>
  );
}

export default App;
