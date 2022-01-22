import React from 'react';
import './App.css';
import Users4 from './components/users4';
import { UsersProvider } from './components/usersContext';

function App() {
  return (
    <UsersProvider>
      <Users4 />
    </UsersProvider>
  );
}

export default App;
