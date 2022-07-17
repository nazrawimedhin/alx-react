import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        School dashboard
        </p>
      </header>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <lable htmlFor="Email">Email: </lable>
        <input type="email" name="email"></input>

        <lable htmlFor="Password">Password: </lable>
        <input type="password" name="password"></input>

        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
