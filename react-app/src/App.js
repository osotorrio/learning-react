import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <Container>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
