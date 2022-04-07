import logo from "./assets/images/logo.svg";
import "./styles/App.css";
import Skeleton from "@mui/material/Skeleton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to relodddddadwww.
        </p>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <c variant="rectangular" width={210} height={118} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
