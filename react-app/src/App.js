import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details';
import Search from './Pages/Search';

function App() {
  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col sm="auto">
          <Router>
            <Switch>
              <Route exact path="/">
                <Search />
              </Route>
              <Route path="/details">
                <Details />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
