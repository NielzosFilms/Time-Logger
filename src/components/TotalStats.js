import React from "react";
import axios from "axios";

function TotalStats() {
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
        const final_time = data.reduce((total, { total_time }) => {
            return total + total_time;
        }, 0);
        return (
            <div className="text-muted d-flex">
                <p className="p-1">Total Projects: {data.length}</p>
                <p className="p-1">|</p>
                <p className="p-1">Total Time: {final_time}</p>
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

export default TotalStats;
