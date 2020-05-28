import React, { Component } from "react";
import "./styles.css";
import Docs from "./Components/Docs";
import Tutorials from "./Components/Tutorials";
import Community from "./Components/Community";
import Profile from "./Components/Profile";
import Menu from "./Components/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFounded from "./Components/PageNotFounded";

class App extends Component {
  state = {
    underconst: {
      Docs: false,
      Tutorials: true,
      Community: false
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutorial" component={Tutorials} />
          <Route path="/community" component={Community} />
          <Route path="/users/:profileId" component={Profile} />
          <Route component={PageNotFounded} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
