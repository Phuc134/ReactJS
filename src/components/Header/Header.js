import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="container-header">
                <Link className='navbar-brand' to="/">Hỏi dân IT</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                        <NavLink className="nav-link" to='/users'>Users</NavLink>
                        <NavLink className="nav-link" to='admin'>Admin</NavLink>
                    </Nav>
                    <Navbar>
                        <button className="btn-login">Login</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Logout
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Navbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;