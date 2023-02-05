import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

 
export default GlobalStyle;