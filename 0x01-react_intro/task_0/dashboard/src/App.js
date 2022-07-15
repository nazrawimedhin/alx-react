import logo from './Holberton-Logo.jpg'
import './App.css'

export default function App() {
  return (
  <div className="App">
    <div className="App-header">
        <img className="App-logo" src= { logo } alt="logo"/>
        <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
    </div>
    <div className="App-footer">
      <p>Copyright 2020 - holberton School</p>
    </div>
  </div>);
}
