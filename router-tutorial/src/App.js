import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './home';
import Profile from './Profile';

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path=':username' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
