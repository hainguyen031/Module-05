import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';

function App() {
  return (
    <div className="App">
      {/*Cách 1*/}
      <Welcome student={{name: 'Ty', age: '18'}}/>

      {/*Cách 2 hoặc cách 3*/}
      {/* <Welcome name="Ty" age="17"/> */}
    </div>
  );
}

export default App;
