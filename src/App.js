import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.css";

import ProjectList from "./components/ProjectList";
import TotalStats from "./components/TotalStats";
import Breadcrums from "./components/Breadcrums";
import ProjectDetails from "./components/ProjectDetails";

function App() {
    return (
        <Router>
            <div>
                <div
                    className="jumbotron container"
                    style={{ padding: "20px", paddingBottom: "5px" }}
                >
                    <h2>Time Logger</h2>
                    <TotalStats />
                    <Breadcrums />
                </div>
                <Switch>
                    <Route exact path="/" component={ProjectList} />
                    <Route
                        path="/project/details/:id"
                        component={ProjectDetails}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
