import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ToDo = () => {
    const TaskRender = () => {
        return (
            <div className="task">
                <div className="checkbox">
                    <input type="checkbox" />
                </div>
                <div className="detail">
                    <h6>Complete the website using the Django.</h6>
                    <div className="bottom">
                        <p>
                            <a href="#">Detail</a>
                        </p>
                        <p>Reminder: 19-10-22</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="TODO">
            <div className="card">
                <div className="logo">TODO</div>
                <h2>Tasks</h2>
                <div className="tasks">
                    <TaskRender />
                    <TaskRender />
                    <TaskRender />
                    <TaskRender />
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

export default ToDo;
