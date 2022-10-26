import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useFetcher } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import UserState from "./context/userState";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
    return (
        <UserState>
            <BrowserRouter>
                <Navbar />
                <ProtectedRoutes />
            </BrowserRouter>
        </UserState>
    );
};

export default App;
