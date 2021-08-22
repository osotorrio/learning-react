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
        <Nav.Link eventKey="/">Search</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Details">Details</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
