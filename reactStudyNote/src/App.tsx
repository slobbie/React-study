import Page2 from 'componenst/Page2';
import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Page2 />
        </Router>
      </>
    </div>
  );
}

export default App;
