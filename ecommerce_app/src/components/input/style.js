import styled from "styled-components";

export const InputWrapper = styled.div`
    margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 32px;
  border: 1px solid #cac5de;
  border-radius: 6px;
    &:focus {
        outline: 1px solid #407bfe;
    }
`;
