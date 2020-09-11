import React from "react";
import axios from "axios";
import qs from "querystring";
import { Link, useHistory } from "react-router-dom";

function NewLog(props) {
    const project_id = props.match.params.id;
    const [content, setContent] = React.useState("");
    const [hours, setHours] = React.useState(0);
    const [date, setDate] = React.useState("");
    const [project, setProject] = React.useState();
    const history = useHistory();

    const preventLoop = 0;

    const fetchProject = async () => {
        axios
            .get("http://localhost:4000/projects/" + project_id)
            .then((response) => {
                setProject(response.data);
            });
    };

    React.useEffect(() => {
        fetchProject();
    }, [preventLoop]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const body = {
            content,
            total_time: hours,
            date,
            project_id: parseInt(project_id),
        };
        const update_project_body = {
            title: project.title,
            total_time: project.total_time + hours,
            total_logs: project.total_logs + 1,
            latest_log: content,
        };
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
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

        axios
            .post("http://localhost:4000/logs", qs.stringify(body), config)
            .then((result) => {
                history.goBack();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="jumbotron container">
            <h3>New Log</h3>
            <hr className="my-4" style={{ borderTop: "1px solid #888" }}></hr>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="form-row form-group">
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Hours"
                            value={hours}
                            onChange={(e) => setHours(parseInt(e.target.value))}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary float-right">
                    Add Log
                </button>
            </form>
        </div>
    );
}

export default NewLog;
