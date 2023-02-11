import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { LoginContainer } from "../../styles/container";
import LeftSplit from "./LeftSplit";
import RightSplit from "./RightSplit";

const LoginPage = () => {
  let { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/home", { replace: true });
    }
  }, [isLogin]);
  
  return (
    <LoginContainer>
      <LeftSplit />
      <RightSplit />
    </LoginContainer>
  );
};

export default LoginPage;
