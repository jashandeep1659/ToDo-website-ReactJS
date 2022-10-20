import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNew = () => {
    const [taskTitle, settaskTitle] = useState("");
    const [taskDetail, settaskDetail] = useState("");

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
                        value={taskDetail}
                        onChange={(e) => {
                            settaskTitle(e.taskDetail.value);
                        }}
                    ></textarea>
                </div>
                <div className="text-center">
                    <Link
                        to="/add"
                        className="bg-green-600 py-3 px-8 text-white font-bold block mt-10 "
                    >
                        Add New
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AddNew;
