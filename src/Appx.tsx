import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Registration from "./Pages/Registration";

const Appx: React.FC = () => {
  return (
    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Appx;
