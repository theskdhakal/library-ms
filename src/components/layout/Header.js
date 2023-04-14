import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GoSignIn } from "react-icons/go";
import { FaUserEdit } from "react-icons/fa";
import logo from "../../Assets/logo.JPG";
export const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="" className="image " />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/signin" className="nav-link">
              <GoSignIn className="fs-3" />
            </Link>
            <Link to="/signup" className="nav-link">
              <FaUserEdit className="fs-3" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
