import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" style={{paddingLeft:"10px"}}>Ghumo<span className='brandName'>Phiro</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='white underline'>Home</Nav.Link>
            <Nav.Link href="#link" className='white underline'>Link</Nav.Link>
            <NavDropdown title="places" id="basic-nav-dropdown" className='white underline'>
              <NavDropdown.Item href="#" className='white'>Shimla</NavDropdown.Item>
              <NavDropdown.Item href="#" className='white'>
                Mumbai
              </NavDropdown.Item>
              <NavDropdown.Item href="" className='white'>Hyderabad</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;