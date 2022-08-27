import "./App.css";
import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us/">AboutUs</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
