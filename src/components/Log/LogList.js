import React, { useState } from "react";
import axios from "axios";
import qs from "querystring";
import { parse } from "path";

function LogList(props) {
    const project_id = props.project_id;
    const [logs, setLogs] = React.useState();
    const [project, setProject] = React.useState();
    const preventLoop = 0;

    const fetchLogs = async () => {
        axios.get("http://localhost:4000/logs").then((response) => {
            setLogs(response.data);
        });
    };

    const fetchProject = async () => {
        axios
            .get("http://localhost:4000/projects/" + project_id)
            .then((response) => {
                setProject(response.data);
            });
    };

    function handleDelete(id) {
        let new_time = 0;
        for (let i = 0; i < logs.length; i++) {
            if (logs[i].id == id) {
                new_time =
                    parseInt(project.total_time) - parseInt(logs[i].total_time);
                break;
            }
        }
        const update_project_body = {
            title: project.title,
            total_time: new_time,
            total_logs: parseInt(parseInt(project.total_logs) - 1),
            latest_log: "",
        };
        axios
            .put(
                `http://localhost:4000/projects/${project_id}`,
                qs.stringify(update_project_body)
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        axios.delete("http://localhost:4000/logs/" + id);
        // update component
    }

    React.useEffect(() => {
        fetchLogs();
        fetchProject();
    }, [preventLoop]);

    if (logs) {
        let project_logs = [];
        logs.map((log) => {
            if (parseInt(log.project_id) === parseInt(project_id)) {
                project_logs.push(log);
            }
            return log;
        });
        project_logs.sort(function (a, b) {
            return b.id - a.id || a.content.localeCompare(b.content);
        });
        return (
            <ul className="list-group">
                {project_logs.map((log) => {
                    return (
                        <li key={log.id} className="list-group-item">
                            <div>{log.content}</div>
                            <div className="d-flex text-muted float-left">
                                <p className="p-1">Time: {log.total_time} H</p>
                                <p className="p-1">|</p>
                                <p className="p-1">Date: {log.date}</p>
                            </div>
                            <button
                                class="btn text-secondary float-right"
                                onClick={() => handleDelete(log.id)}
                            >
                                <svg
                                    width="2em"
                                    height="2em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x-circle-fill"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                                    />
                                </svg>
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default LogList;
