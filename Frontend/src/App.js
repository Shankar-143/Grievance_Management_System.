import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Auth";
import Register from "./register";
import Forgetpassword from "./forgetPassword";
import ShowComplaint from "./showComplaint";
import NavbarFuntion from "./Navbar";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarFuntion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<Forgetpassword />} />
        <Route path="/show" element={<ShowComplaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
