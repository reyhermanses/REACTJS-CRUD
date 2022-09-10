import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout';

function LightNavbar() {

  var isAuthenticated = localStorage.getItem('api_token');

  const protectedNav = {
    
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Unit">Unit</Link></Nav.Link>
            <Nav.Link><Link to="/second-page">Second Page</Link></Nav.Link>
            {
              isAuthenticated == null ? (
                <>
                  <Nav.Link><Link to="/login">Login</Link></Nav.Link> :
                </>
              ) : (
                <>
                  <Nav.Link onClick={Logout}>Log out</Nav.Link>
                </>
              )
            }

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default LightNavbar;