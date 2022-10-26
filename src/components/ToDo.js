import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from "../api";
import { isCompositeComponentWithType } from "react-dom/test-utils";
const ToDo = () => {
    const [tasks, settasks] = useState([]);
    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = () => {
        axiosInstance.get("core/api/").then((res) => {
            settasks(res.data);
        });
    };

    const TaskRedner = () =>
        tasks.map((item, index) => {
            return <TaskComponent key={index} data={item} />;
        });
    const TaskComponent = ({ data }) => {
        const CompleteTask = () => {
            axiosInstance
                .patch(`core/api/${data.id}/`, {
                    completed: !data.completed,
                })
                .then((res) => {
                    fetchTask();
                });
        };

        const DeleteTask = () => {
            axiosInstance.delete(`core/api/${data.id}/`).then((res) => {
                fetchTask();
            });
        };

        return (
            <div
                className={`task ${
                    data.completed ? "bg-green-300" : "bg-white"
                }   `}
            >
                <div className="checkbox" onClick={() => CompleteTask()}>
                    <input
                        type="checkbox"
                        checked={data.completed}
                        onChange={() => {
                            CompleteTask();
                        }}
                    />
                </div>
                <div className="detail" onClick={() => CompleteTask()}>
                    <h6>{data.name}</h6>
                    <div className="bottom">
                        <p>Reminder: {data.reminder}</p>
                    </div>
                </div>
                <div className="delete" onClick={() => DeleteTask()}>
                    <button>
                        <i className="bx bx-trash-alt"></i>
                    </button>
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
                    <TaskRedner />
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
