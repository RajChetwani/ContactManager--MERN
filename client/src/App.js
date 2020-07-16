import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState from './context/contact/ContactState';

const  App = () => {
  return (
   <ContactState>
   <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="container">
       <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
       </Switch>
      </div>
    </div>
   </BrowserRouter>
   </ContactState>
  );
}

export default App;