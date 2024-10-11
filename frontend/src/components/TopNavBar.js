import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const TopNavBar = () => {
  return (
    <Navbar position="fixed" style={{ backgroundColor: "#fdfefb" }}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Urban Harvest</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="font-bold" style={{ color: "#85be40" }} href="/grow">
            Grow
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold"
            style={{ color: "#85be40" }}
            href="/market"
          >
            Market
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" style={{ color: "#85be40" }} href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" style={{ color: "#85be40" }} href="/">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" style={{ color: "#85be40" }} href="/chatbot">
            Chatbot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" style={{ color: "#85be40" }} href="/education">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold"
            style={{ color: "#85be40" }}
            href="/profile"
          >
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            className="font-bold"
            style={{ color: "#85be40" }}
            href="/Login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/Signup" variant="flat">
            <span className="font-bold" style={{ color: "#85be40" }}>
              Sign Up
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavBar;
