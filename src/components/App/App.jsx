import React from "react";
import axios from "axios";
import "./App.css";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Review from "../Review/Review";
import Feedback from "../Feedback/Feedback";
import Comments from "../Comments/Comments";
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Router>
    </div>
  );
}

export default App;
