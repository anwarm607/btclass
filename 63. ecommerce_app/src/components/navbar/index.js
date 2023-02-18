import { NavLink } from "react-router-dom";
import { NavbarContainer } from "../../styles/container";
import { LogoutBtn, NavbarLogo, NavList, NavListItem } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  let { setIsLogin, isLogin, userId } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    setIsLogin(false);
  };
  useEffect(() => {
    if (userId) {
      axios("https://fakestoreapi.com/carts").then((res) =>
        setCartData(res.data)
      );
    }
  }, [userId]);

  return (
    <NavbarContainer>
      <NavList>
        <NavLink to="/">
          <NavbarLogo src="https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png" />
        </NavLink>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavListItem style={{ position: "relative" }} onClick={() => navigate("cart")}>
            {isLogin ? (
              <>
              {
                cartData.length > 0 ?
                <p
                  style={{
                    position: "absolute",
                    top: '-3px',
                    right: "25px",
                    background: "orange",
                    color: "white",
                    borderRadius: "27px",
                    padding: "6px",
                  }}
                /> : null
              }
                <CartIcon
                  style={{
                    width: "31px",
                    height: "31px",
                    fill: "#213d7b",
                    marginRight: "32px",
                    cursor: "pointer",
                  }}
                />
              </>
            ) : null}
          </NavListItem>
          <NavListItem>
            {isLogin ? (
              <>
                <LogoutBtn onClick={() => logout()}>Logout</LogoutBtn>
              </>
            ) : null}
          </NavListItem>
        </div>
      </NavList>
    </NavbarContainer>
  );
};
export default Navbar;
