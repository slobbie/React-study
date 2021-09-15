import React from "react";
import Style from "./Style";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    NavLink 
  } from "react-router-dom";
  



const PcNav = () => {

  
   
    return (
        <Router>
            <div className="header">
                <Switch>
                    <div className="nav">
                        <Route path="/">
                            <div> 
                                <a href="/" className="mainlogo"><img src="" alt=""/></a>
                            </div>
                        </Route>
                        <ul className="menunav">
                            <Route path="">  
                              <li><a href="/">STYLE</a></li>
                            </Route>  
                            <Route path="">
                             <li><a href="/">SHOP</a></li>
                            </Route>   
                            <Route path="">
                             <li><a href="/">돋보기</a></li>
                            </Route>   
                        </ul>
                    </div>
                </Switch>
            </div>
        </Router>
    );
};

export default PcNav;