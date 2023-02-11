import { NavLink } from "react-router-dom";
import { NavbarContainer } from "../../styles/container";
import { LogoutBtn, NavbarLogo, NavList, NavListItem } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";

const Navbar = () => {
  const navigate = useNavigate();
  let { setIsLogin, isLogin } = useContext(AuthContext);

  const logout = () => {
    localStorage.clear();
    navigate("/", {replace: true});
    setIsLogin(false);
  };

  return (
    <NavbarContainer>
      <NavList>
        <NavLink to="/">
          <NavbarLogo src="https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png" />
        </NavLink>
        <NavListItem>
          {isLogin ? (
            <LogoutBtn onClick={() => logout()}>Logout</LogoutBtn>
          ) : null}
        </NavListItem>
      </NavList>
    </NavbarContainer>
  );
};
export default Navbar;
