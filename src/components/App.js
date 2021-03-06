import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import Connect from './Footer/Connect';
import Footer from './Footer/Footer';
import Home from './Home';
import About from './About/About';
import { ParallaxProvider } from 'react-scroll-parallax';
import {BrowserRouter , Switch, Route} from 'react-router-dom'

function App() {

  return (
    <React.Fragment>
        <BrowserRouter>
            <Header /> 
              <Switch>
                <ParallaxProvider>
                  <Container maxWidth="lg">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About} />
                  </Container>
                </ParallaxProvider>
              </Switch>
              <Connect />
            <Footer />
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
