import styled, { keyframes } from 'styled-components';
// const rotate = keyframes
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;


/* animation: ${rotate} 2s linear infinite ; */

export const HeadingStyle = styled.h1`
background-color: ${(props) => props.bgColor || 'aquamarine'};
margin-bottom: 10px;
&:hover {
    background-color: white;
}
`



export const Container = styled.div`
    padding: 10px;
`