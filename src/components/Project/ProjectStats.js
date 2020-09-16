import React from "react";

function ProjectStats(props) {
    const { total_time, total_logs } = props.data;
    return (
        <div className="card-text text-muted d-flex">
            <p className="p-1">Logs: {total_logs}</p>
            <p className="p-1">|</p>
            <p className="p-1">Time Spent: {total_time}</p>
            {total_logs > 0 && <p className="p-1">|</p>}
            {total_logs > 0 && (
                <p className="p-1">
                    Average time per Log: {total_time / total_logs}
                </p>
            )}
        </div>
    );
}

export default ProjectStats;
