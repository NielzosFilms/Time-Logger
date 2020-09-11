import React from "react";
import axios from "axios";

function LogList(props) {
    const project_id = props.project_id;
    const [logs, setLogs] = React.useState();
    const preventLoop = 0;

    const fetchLogs = async () => {
        axios.get("http://localhost:4000/logs").then((response) => {
            setLogs(response.data);
        });
    };

    React.useEffect(() => {
        fetchLogs();
    }, [preventLoop]);

    if (logs) {
        let project_logs = [];
        logs.map((log) => {
            if (log.project_id === project_id) {
                project_logs.push(log);
            }
        });
        return (
            <ul className="list-group">
                {project_logs.map((log) => {
                    return (
                        <li key={log.id} className="list-group-item">
                            <div>{log.content}</div>
                            <div className="d-flex text-muted">
                                <p className="p-1">Time: {log.total_time} H</p>
                                <p className="p-1">|</p>
                                <p className="p-1">Date: {log.date}</p>
                            </div>
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
