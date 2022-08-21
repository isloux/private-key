import logo from './logo.png'
import './App.css';
import InputForm from './components/inputform';
import Donation from './components/donation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Converting a compressed 128-bit WIF private key to uncompressed format
        </p>
      </header>
      <InputForm />
      <Donation />
    </div>
  );
}

export default App;
