import React, { useEffect, useState } from "react";
import axiosInstance, { baseURL } from "../api";
import userStatusContext from "./userContext";

const UserState = (props) => {
    const [userstatus, setuserstatus] = useState(false);

    const userStatusUpdate = () => {
        axiosInstance
            .get(`core/api/`)
            .then((res) => {
                setuserstatus(true);
            })
            .catch((err) => {
                setuserstatus(false);
            });
    };
    useEffect(() => {
        userStatusUpdate();
    }, []);

    return (
        <userStatusContext.Provider
            value={{ userstatus: userstatus, userStatusUpdate }}
        >
            {props.children}
        </userStatusContext.Provider>
    );
};

export default UserState;
