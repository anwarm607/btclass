import { useContext, useState } from "react";
import Input from "../../components/input";
import { LoginHeading, LoginSubText } from "../../styles/common";
import {
  LoginBtn,
  LoginBtnWrapper,
  LoginHeadingWrapper,
  RightSplitSection,
  RightSplitSectionWrapper,
} from "./styles";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context";

const RightSplit = () => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false)

  let {setIsLogin} = useContext(AuthContext);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true)
    // API CALL
    let data = {
      username: username,
      password: password
    }
    // console.log(data);

    // Login API call
    axios.post('https://fakestoreapi.com/auth/login', data).then(res => {
      // console.log(res.data.token);
      
      if (res.data.token) {
        // Set the token to localstorage that is get from backend
        localStorage.setItem('token', res.data.token);
        // Set is login to true by using context
        setIsLogin(true);
        setLoading(false)
      }
    }).catch(ex => {
      console.log(ex.response.data);
      alert(ex.response.data || "Something went wrong!!");
      setLoading(false)
    })
  };
  return (
    <RightSplitSection>
      <RightSplitSectionWrapper>
        <LoginHeadingWrapper>
          <LoginHeading>Welcome to Ebay!</LoginHeading>
          <LoginSubText>Login to continue</LoginSubText>
        </LoginHeadingWrapper>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <div>
            <Input
              text="Username"
              name="username"
              onChange={(ev) => setUserName(ev.target.value)}
              value={username}
            />
            <Input
              text="Password"
              name="password"
              type="password"
              onChange={(ev) => setPassword(ev.target.value)}
              value={password}
            />
          </div>
          <LoginBtnWrapper>
            <LoginBtn disabled={loading} type="submit">Login</LoginBtn>
          </LoginBtnWrapper>
        </form>
      </RightSplitSectionWrapper>
    </RightSplitSection>
  );
};

export default RightSplit;
