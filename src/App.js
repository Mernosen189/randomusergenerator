import logo from './logo.svg';
import './App.css';
import Landing from "./Component/Landing"
import User from "./Component/User";
import User from "./Component/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="User" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
