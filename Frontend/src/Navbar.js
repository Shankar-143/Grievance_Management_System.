import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './image/cutm.jpeg'; 

function NavbarFuntion() {
  return (
    <>
      <Navbar bg="" variant="" className='navbar'>
        <Container>
          <Navbar.Brand href="/"><img src={logo} style={{ height: "120px", width: "100px" }} alt="Image Preview"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" >Home</Link></Nav.Link>
            <Nav.Link ><Link to="/show">Complaint</Link></Nav.Link>
          </Nav>
           <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                 <Nav.Link className="justify-content-end"><Link to="/auth">Login</Link></Nav.Link>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavbarFuntion;