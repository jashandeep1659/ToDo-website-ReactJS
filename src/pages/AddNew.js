import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api";

const AddNew = () => {
    const [taskTitle, settaskTitle] = useState("");
    const [taskDetail, settaskDetail] = useState("comeptel");
    const [reminder, setreminder] = useState("");
    const navigate = useNavigate();
    const SubmitForm = () => {
        axiosInstance
            .post("core/api/", {
                name: taskTitle,
                detail: taskDetail,
                reminder: reminder,
            })
            .then((res) => {
                console.log(res);
                return navigate("/");
            });
    };

    return (
        <section id="Add">
            <div className="card">
                <div className="logo">Add New</div>
                <div className="form block">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskTitle}
                        onChange={(e) => {
                            settaskTitle(e.target.value);
                        }}
                    />
                    <textarea
                        placeholder="Task Detail"
                        className="hidden"
                        value={taskDetail}
                        onChange={(e) => {
                            settaskDetail(e.taskDetail.value);
                        }}
                    ></textarea>
                    <input
                        type="date"
                        value={reminder}
                        onChange={(e) => {
                            setreminder(e.target.value);
                        }}
                    />
                </div>
                <div className="text-center">
                    <button
                        onClick={() => SubmitForm()}
                        className="bg-green-600 py-3 px-8 text-white font-bold block mt-10 w-full"
                    >
                        Add New
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AddNew;
