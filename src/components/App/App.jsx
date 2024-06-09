import React from "react";
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
} from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme/AppTheme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
