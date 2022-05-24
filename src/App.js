import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doctors from "./Components/Doctors";
import Consults from "./Components/Consult/consult";
import Login from "./Components/Login/login.jsx";
import Signup from "./Components/Signup/signup.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="consult" element={<Consults />} />
      </Routes>
      <Footer />
    </>
  );
}
