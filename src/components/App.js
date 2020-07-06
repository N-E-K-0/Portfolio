import React from 'react';
import Header from './Header/Header';
import Connect from './Footer/Connect';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import {BrowserRouter , Switch, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Header />
        <Switch>
          <Route exact path="/Portfolio" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Connect />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
