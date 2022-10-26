import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userStatusContext from "../context/userContext";
import Cookies from "js-cookie";
const Navbar = () => {
    const userContext = useContext(userStatusContext);
    const LogoutUser = () => {
        Cookies.remove("tokens");
        userContext.userStatusUpdate();
    };
    return (
        <section id="Navbar">
            <div className="logo">
                {" "}
                <Link to="/"> TODO</Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {userContext.userstatus ? (
                        <button onClick={() => LogoutUser()}>Logout</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </section>
    );
};

export default Navbar;
