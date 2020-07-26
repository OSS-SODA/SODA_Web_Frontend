import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Main,
  TimeLine,
  Opensourse,
  ProjectList,
  ProjectDetail,
  MakeProject,
  Register,
  Login
} from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/projects" component={TimeLine} />
        <Route path="/peoples" component={Opensourse} />

        <Route path="/projectList" component={ProjectList} />
        <Route path="/projectDetail/:id" component={ProjectDetail} />
        <Route path="/project/makeProject" component={MakeProject} />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
