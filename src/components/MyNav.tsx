import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

interface MyNavProps {
  title: string;
}
//this below also works but then we have to remove & RouteComponentProps from the (in line 12)
// interface MyNavProps extends RouteComponentProps {
//     title: string;
//   }

const MyNav = (props: MyNavProps & RouteComponentProps) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>{props.title}</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/">
          <div
            className={
              props.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </div>
        </Link>
        <Link to="/menu">
          <div
            className={
              props.location.pathname === "/menu"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Menu
          </div>
        </Link>
        <Link to="/reservations">
          <div
            className={
              props.location.pathname === "/reservations"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Reservation
          </div>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(MyNav);
