import React from "react";
import PcNav from "./components/PcNav"
import MobileNav from "./components/MobileNav"
import { Mobile, PC } from "./MediaQuery"
import "./App.css";



function App() {
       
  return ( 
  <> 
      <PC> 
        <PcNav />
      </PC>  
      <Mobile> 
        <MobileNav />
      </Mobile>
  </>
   );
};

export default App;