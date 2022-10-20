import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.scss";
import AddNew from "./pages/AddNew";
import Login from "./pages/Login";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="add/" element={<AddNew />} />
                <Route path="login/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
