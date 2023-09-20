import { Outlet } from "react-router-dom";
import "./App.css";
import HearHome from "./components/HearHome";

function App() {
  return (
    <div className="App">
      <header>
        <HearHome />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
