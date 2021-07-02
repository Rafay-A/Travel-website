import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
    <Router>
     <Navbar></Navbar>
     <Switch>
       <Route path ="/" exact component={Home} />
     </Switch>
    </Router>
    </>
  );
}


export default App;
