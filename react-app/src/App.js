import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Details from './Pages/Details';
import Search from './Pages/Search';

function App() {
  return (
    <Container>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
