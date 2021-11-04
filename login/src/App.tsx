import LoginPage from 'componenst/LoginPage';
import { PcNav } from 'componenst/PcNav';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Profile from 'componenst/Profile';


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <PcNav />
          <Profile />
        </Router>
       </>
    </div>
  );
}

export default App;
