import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

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
        className={`navbar navbar-expand-lg ${visible ? "visible" : "hidden"}`}
        fixed="top"
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: visible ? "#ff6600" : "rgba(255, 102, 0, 0.8)",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/suitmedialogo.png"
              alt="logo-suitmedia"
              style={{ width: "150px" }}
            />
          </Navbar.Brand>
          <Nav className="justify-content-end gap-2">
            {NavItem.map((item, index) => (
              <Nav.Item key={index} className="nav-item">
                <Nav.Link
                  as={Link}
                  to={item.url}
                  className={`nav-link text-white ${
                    location.pathname === item.url ? "active" : ""
                  }`}
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
