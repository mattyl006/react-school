import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const colors = {
    alizarin: '#e74c3c',
    turquoise: '#1abc9c',
    emerald: '#2ecc71',
};

function App() {
  return (
      <main className="App">
        <h1>Hello react-architecture!</h1>
          <Button icon={faCoffee} color={colors.alizarin} bgColor={colors.turquoise}>Click me!</Button>
          <Input color={colors.alizarin} bgColor={colors.turquoise} borderColor={colors.emerald} borderRadius={16} borderSize={12}/>
      </main>
  );
}

export default App;
