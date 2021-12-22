import React from 'react';
import './styles/init.scss';
import CounterContainers from "./components/CounterContainers";
import CounterContainer2 from "./components/CounterContainer2";


function App() {
  return (
    <div className="App">
         <div> 
           <CounterContainers /> 
           <CounterContainer2 /> 
          </div>
    </div>
  );
}

export default App;
