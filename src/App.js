import React from 'react';
import "./App.css";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route,Switch,Link} from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
