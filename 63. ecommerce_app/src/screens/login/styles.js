import styled from "styled-components";

export const LeftSplitSection = styled.div`
  width: 45%;
  height: auto;
  background-color: #f0f4fc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSplitSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 55%;
`;

export const RightSplitSectionWrapper = styled.div`
  width: 100%;
  padding: 90px;
`;


export const LoginHeadingWrapper = styled.div`
  margin-bottom: 36px;
`
export const LoginBtnWrapper = styled.div`
  margin-top: 20px;
`
export const LoginBtn = styled.button`
  border: none;
    color: white;
    background: #407bfe;
    padding: 10px 55px;
    font-size: 18px;
    border-radius: 21px;
    box-shadow: 4px 4px 6px #407bfe;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
`