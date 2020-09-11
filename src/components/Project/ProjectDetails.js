import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProjectStats from "./ProjectStats";
import LogList from "../Log/LogList";

function ProjectDetails(props) {
    const [data, setData] = React.useState();
    const preventLoop = 0;
    const id = props.match.params.id;

    const fetchProject = async () => {
        axios.get(`http://localhost:4000/projects/${id}`).then((response) => {
            setData(response.data);
        });
    };

    React.useEffect(() => {
        fetchProject();
    }, [preventLoop]);

    if (data) {
        return (
            <div className="container jumbotron">
                <h1 className="display-4">{data.title}</h1>
                <div className="d-flex justify-content-between">
                    <ProjectStats data={data} />
                    <Link
                        to={`/project/details/${id}/log/new`}
                        className="text-info float-right"
                    >
                        <svg
                            width="3em"
                            height="3em"
                            viewBox="0 0 16 16"
                            className="bi bi-plus-circle-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                            />
                        </svg>
                    </Link>
                </div>
                <hr
                    className="my-4"
                    style={{ borderTop: "1px solid #888" }}
                ></hr>
                <LogList project_id={data.id} />
            </div>
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

export default ProjectDetails;
