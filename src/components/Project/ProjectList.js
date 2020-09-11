import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProjectNewButton from "./ProjectNewButton";
import ProjectStats from "./ProjectStats";

function ProjectList() {
    const [data, setData] = React.useState();
    const preventLoop = 0;

    const fetchProjects = async () => {
        axios.get("http://localhost:4000/projects").then((response) => {
            setData(response.data);
        });
    };

    React.useEffect(() => {
        fetchProjects();
    }, [preventLoop]);

    if (data) {
        return (
            <div className="container">
                {data.map((project) => {
                    return (
                        <div key={project.id} className="card m-2">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <ProjectStats data={project} />
                                <div className="card-text text-light">
                                    Latest Log:
                                    {project.latest_log && (
                                        <blockquote className="p-1 blockquote">
                                            <p className="mb-0">
                                                {project.latest_log}
                                            </p>
                                        </blockquote>
                                    )}
                                </div>
                                <Link
                                    to={"/project/details/" + project.id}
                                    className="btn btn-secondary float-right"
                                >
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-pencil-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    );
                })}
                <ProjectNewButton />
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

export default ProjectList;
