import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import logo from "../../Assets/logo.JPG";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../pages/signup-signin/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    signOut(auth).then(() => {
      //set user state to empty {}

      dispatch(setUser({}));
    });
  };

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
            {!user?.uid ? (
              <>
                <Link to="/signin" className="nav-link">
                  <GoSignIn className="fs-3" />
                </Link>
                <Link to="/signup" className="nav-link">
                  <FaUserEdit className="fs-3" />
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="nav-link">
                  <AiFillDashboard className="fs-3" />
                </Link>

                <Link to="#" className="nav-link" onClick={handleOnLogout}>
                  <GoSignOut className="fs-3" />
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
