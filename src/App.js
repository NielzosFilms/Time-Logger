import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.css";

import ProjectList from "./components/Project/ProjectList";
import ProjectDetails from "./components/Project/ProjectDetails";
import ProjectNew from "./components/Project/ProjectNew";

import TotalStats from "./components/TotalStats";
import Breadcrums from "./components/Breadcrums";

import NewLog from "./components/Log/NewLog";

function App() {
    return (
        <Router>
            <div>
                <div
                    className="jumbotron container"
                    style={{ padding: "20px", paddingBottom: "5px" }}
                >
                    <h2 style={{ display: "inline" }}>Time Logger</h2>
                    <a
                        href="https://github.com/NielzosFilms/Time-Logger"
                        target="_blank"
                        className="float-right"
                        style={{
                            display: "inline",
                        }}
                    >
                        <svg
                            width="2em"
                            height="2em"
                            viewBox="0 0 16 16"
                            className="bi bi-code-slash"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
                            />
                        </svg>
                    </a>
                    <hr
                        className="my-4"
                        style={{ borderTop: "1px solid #888" }}
                    ></hr>
                    <TotalStats />
                    <Breadcrums />
                </div>
                <Switch>
                    <Route exact path="/" component={ProjectList} />
                    <Route
                        exact
                        path="/project/details/:id"
                        component={ProjectDetails}
                    />
                    <Route
                        exact
                        path="/project/details/:id/log/new"
                        component={NewLog}
                    />
                    <Route exact path="/project/new" component={ProjectNew} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
