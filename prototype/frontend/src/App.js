import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { StartingPage } from './pages/StartingPage';
import { AgreementPage } from './pages/AgreementPage';
import { WritingPage } from './pages/WritingPage';
import { TaskPage } from './pages/TaskPage';
import { ResultPage } from './pages/ResultPage';
import { FinishPage } from './pages/FinishPage';

import './App.css';


class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"> <StartingPage/> </Route>
            <Route path="/version:version"> <WritingPage/> </Route>
            <Route exact path="/task:tid"> <TaskPage/> </Route>
            <Route path="/task:tid/writing"> <WritingPage/> </Route>
            <Route path="/task:tid/result"> <ResultPage/> </Route>
            <Route path="/finished"> <FinishPage/> </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

// <Route exact path="/"> <AgreementPage/> </Route> //TODO Route to aggrement page

export default App;