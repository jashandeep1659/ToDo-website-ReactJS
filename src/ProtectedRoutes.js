import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userStatusContext from "./context/userContext";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import Login from "./pages/Login";
const ProtectedRoutes = () => {
    const userContext = useContext(userStatusContext);
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={userContext.userstatus ? <Home /> : <Login />}
            />
            <Route
                exact
                path="add/"
                element={userContext.userstatus ? <AddNew /> : <Login />}
            />
            <Route exact path="login/" element={<Login />} />
        </Routes>
    );
};

export default ProtectedRoutes;
