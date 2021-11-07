import React from "react";
import PcNav from "./components/PcNav";
import MobileNav from "./components/MobileNav";
import { Mobile, PC } from "./MediaQuery";
import "./App.css";
import { useState } from "react";

import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Mainpage from "./components/Mainpage";
import Style from "./components/Style";
import Shop from "./components/Shop";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Login from "./components/Login";





function App() {

  

       
  return ( 
  <> 
    <Router>
      <PC> 
        <PcNav />
      </PC>  
      <Mobile> 
        <MobileNav />
      </Mobile>
      <Switch>
        <Route path="/" exact>
          <Mainpage />
        </Route>
        <Route path="/style">
          <Style />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  <Footer />
  </>
   );
};

export default App;