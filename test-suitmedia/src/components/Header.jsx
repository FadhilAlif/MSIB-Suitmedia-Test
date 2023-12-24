import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Hero from "./Hero";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const NavItem = [
    { title: "Work", url: "/work" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Ideas", url: "/ideas" },
    { title: "Carrers", url: "/carrers" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg"
        fixed="top"
        style={{ height: "100px", width: "100%", backgroundColor: "#ff6600" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/suitmedialogo.png"
              alt="logo-suitmedia"
              style={{ width: "150px" }}
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            {NavItem.map((item, index) => (
              <Nav.Item key={index} className="nav-item">
                <Nav.Link className="nav-link text-white" href={item.url}>
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <Hero />
    </div>
  );
};

export default Header;
