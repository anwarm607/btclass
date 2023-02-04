import { Container, HeadingStyle } from "./style/common";
import "./app.css";
import Card from "./component/Card";
import Theme from "./theme";
import { useState } from "react";


function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
      <Theme theme={theme}>
        <Container>
          <HeadingStyle>Another Heading</HeadingStyle>
          <HeadingStyle bgColor="green">Green Heading</HeadingStyle>
          <HeadingStyle bgColor="orange">Orange Heading</HeadingStyle>
          <HeadingStyle bgColor="purple">Purple Heading</HeadingStyle>

          <Card />
          <button onClick={() => changeTheme()}>Click to change theme</button>
        </Container>
      </Theme>
  );
}

export default App;
