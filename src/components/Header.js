import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { href: "/", label: "Home", active: true },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Contact" },
  ];

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TypingCat</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <NavLink to="/typing-spped-test">
          <Button className="bg-black">Get started</Button>
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navLinks.map((link, index) => (
          <Navbar.Link key={index} href={link.href} active={link.active || false}>
            {link.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
