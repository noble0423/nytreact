import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Articles from "./pages/Articles";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";


const App = () => (
      <Router>
        <div>
          <Nav />
          <Jumbotron>
            <h1>New York Times Article Search</h1>
            <h5>Search for and annotate articles of interest.</h5>
          </Jumbotron>
          <Switch>
            <Route exact path = "/" component = {Articles} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );

    export default App;
