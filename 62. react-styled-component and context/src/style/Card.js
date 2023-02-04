import styled from "styled-components";

import LatoFont from 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap'

export const CardWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  padding: 5px;
  width: 25%;
  box-shadow: 2px 5px 5px black;
  margin-top: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardBodyWrapper = styled.div`
    margin: 10px 0 ;
`

export const CardHeading = styled.h5`
    margin-bottom: 5px;
    font-size: 20px;

`

export const CardDesc = styled.p`
    font-family: Arial, Helvetica, sans-serif;
`

export const CardButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.btnBackground};
    outline: 0;
    border: 0;
    padding: 10px 0 ;
    border-radius: 5px;
    color: ${props => props.theme.btnColor};
`

export const HeadingStyle = styled.h2`
background-color: blue;
margin-bottom: 10px;
`