import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';

function Navigation() {
  let history = useHistory();

  const handleSelection = selectedKey => {
    history.push(selectedKey);
  };

  return (
    <Nav onSelect={selectedKey => handleSelection(selectedKey)}>
      <Nav.Item>
        <Nav.Link eventKey="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/About">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
