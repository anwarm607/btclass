import { NavLink } from "react-router-dom";
import { NavbarContainer } from "../../styles/container";
import { NavbarLogo } from "./style";

const Navbar = () => {
  return (
      <NavbarContainer>
        <ul>
          <NavLink to="/">
            <NavbarLogo src='https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png' />
          </NavLink>
        </ul>
      </NavbarContainer>
  );
};
export default Navbar;
