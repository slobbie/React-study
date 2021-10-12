import './index.css';
import Header from "./component/Header"
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
         <Route exact path="/"> 
          <DayList /> 
         </Route>
         <Route path="/day/:day"> 
          <Day /> 
         </Route>
         <Route>
          <EmptyPage />
         </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
