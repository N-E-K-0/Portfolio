import React from 'react';
import Header from './Header';
import Intro from './Intro';
import MiddleSection from './MiddleSection';
import Connect from './Connect';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className='style' >
          {/* <Header /> */}
          <Intro />
          <MiddleSection />
          <Connect />
          <Footer />
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
