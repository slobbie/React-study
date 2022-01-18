import Page from 'componenst/Page';
import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Page />
        </Router>
      </>
    </div>
  );
}

export default App;
