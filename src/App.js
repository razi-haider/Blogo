// This is the main file of the project
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing the components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateBlog from "./components/CreateBlog";
import About from "./components/About";
import Login from "./components/Login"
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import User from "./components/User";
import "./Style.css";
import Footer from "./components/Footer";

function App() {
  <link rel="stylesheet" href="./Style.css" />
  return (
    <div>
      {/* USAGE OF ROUTER DOM */}
      <Router>
        {/* REUSABLE COMPONENT */}
        <Navbar />
        <Routes>
          {/* Paths to navigate */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/User" element={<User />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// Export App component
export default App;
