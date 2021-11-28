import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Gnb from './componants/Gnb';
import Calendar from './componants/Calendar';

function App() {
  return (
    <div className="App">
      <Gnb />
      <Calendar />
    </div>
  );
}

export default App;
