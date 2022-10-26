import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../api";
import Cookies from "js-cookie";
import userStatusContext from "../context/userContext";

const Login = () => {
    const [email, setemail] = useState("jashan@j.com");
    const [password, setpassword] = useState("5");
    const userContext = useContext(userStatusContext);
    const navigate = useNavigate();
    const SubmitForm = (e) => {
        axios
            .post(`${baseURL}api/token/`, {
                email: email,
                password: password,
            })
            .then((res) => {
                Cookies.set("tokens", JSON.stringify(res.data));
                userContext.userStatusUpdate();
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section id="Login">
            <div className="card">
                <div className="logo">Sign In</div>

                <div className="form">
                    <div className="item">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                            value={email}
                        />
                    </div>
                    <div className="item">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                            value={password}
                        />
                    </div>
                    <div className="links">
                        <Link
                            className="text-blue-700 text-[13px] "
                            to="/signup"
                        >
                            Create an account
                        </Link>
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-green-600 py-3 px-8 text-white font-bold block mt-10 w-full"
                            onClick={() => SubmitForm()}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
