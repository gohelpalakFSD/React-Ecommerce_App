
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';


function Header(){
   
 ;
    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                     
                    <NavLink to="/signUp"><Button>SignUp</Button></NavLink>

                     
                   
                    
                    <NavLink to="/signIn"><Button>SignIn</Button></NavLink>
                     
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;