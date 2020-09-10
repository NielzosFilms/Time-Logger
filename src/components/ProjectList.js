import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ProjectList() {
    const [data, setData] = React.useState();
    const test = 0;

    const fetchProjects = async () => {
        axios.get("http://localhost:4000/projects").then((response) => {
            console.log(response.data);
            setData(response.data);
        });
    };

    React.useEffect(() => {
        fetchProjects();
    }, [test]);

    console.log(data);
    if (data) {
        return (
            <div className="container">
                {data.map(({ id, title, total_time }) => {
                    return (
                        <div key={id} className="card m-2">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <div className="card-text text-muted">
                                    <p
                                        className="card-text"
                                        style={{
                                            display: "inline-block",
                                            width: "75%",
                                        }}
                                    >
                                        Latest log: "niet veel gedaan"
                                        <br />
                                        Time: 08:00 H
                                    </p>
                                    <p className="card-text float-right">
                                        Time spent: {total_time} H
                                    </p>
                                </div>
                                <Link
                                    to={"/project/details/" + id}
                                    className="btn btn-primary float-right"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default ProjectList;
