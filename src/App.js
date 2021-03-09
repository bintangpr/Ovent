import React,{useState} from "react";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Item from "./pages/Item";
import Popular from "./pages/Popular";
import Rental from "./pages/Rental";
import Decoration from "./pages/Decoration";
import Catering from "./pages/Catering";
//privateRout
//Auth

//const ngecek token untuk login biar ke Home

function App() {
  return (
    //auth tokens
    
    <Router>
      <GlobalStyle />

      <switch>
        <Route path="/item/:id" component={Item} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/popular" component={Popular} />
        <Route path="/rental" component={Rental} />
        <Route path="/catering" component={Catering} />
        <Route path="/decoration" component={Decoration} />
        <Route exact path="/" component={LandingPage} />
       

        
      </switch>

     
    </Router>
    
  );
}

export default App;
