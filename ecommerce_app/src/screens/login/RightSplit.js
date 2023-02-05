import { useState } from "react";
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

const RightSplit = () => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (ev) => {
    // API CALL
    let data = {
      username: username,
      password: password
    }
    console.log(data)

    axios.post('https://fakestoreapi.com/auth/login', data).then(res => {
      console.log(res)
    })
    ev.preventDefault();
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
            <LoginBtn type="submit">Login</LoginBtn>
          </LoginBtnWrapper>
        </form>
      </RightSplitSectionWrapper>
    </RightSplitSection>
  );
};

export default RightSplit;
