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
                    <h2>Time Logger</h2>
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
