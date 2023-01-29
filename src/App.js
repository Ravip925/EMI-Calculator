import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";


function App() {
  const token = localStorage.getItem("token");


  return (
    <Routes>
      {token && <Route path="/" exact element={<Home token={token} />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
