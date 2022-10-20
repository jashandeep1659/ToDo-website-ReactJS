import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
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
                    <a href="/">Login</a>
                </li>
            </ul>
        </section>
    );
};

export default Navbar;
