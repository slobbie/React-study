import Page3 from 'componenst/Page3';
import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Page3 />
        </Router>
      </>
    </div>
  );
}

export default App;
