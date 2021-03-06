import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
     <Navbar></Navbar>
     <Switch>
       <Route path = '/' exact component={Home} />
       <Route path = '/services' component={Services} />
       <Route path = '/products' component={Products} />
       <Route path = '/sign-up' component={SignUp} />
     </Switch>
     <Footer></Footer>
    </Router>
    </>
  );
}
export default App;