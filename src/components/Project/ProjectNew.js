import React from "react";
import axios from "axios";
import qs from "querystring";
import { useHistory } from "react-router-dom";

function ProjectNew() {
    const [title, setTitle] = React.useState("");
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const body = {
            title,
            total_time: 0,
            total_logs: 0,
        };
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        axios
            .post("http://localhost:4000/projects", qs.stringify(body), config)
            .then((result) => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="jumbotron container">
            <h3>New Project</h3>
            <hr className="my-4" style={{ borderTop: "1px solid #888" }}></hr>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-primary float-right">
                    Add Project
                </button>
            </form>
        </div>
    );
}

export default ProjectNew;
