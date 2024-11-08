import styled from "styled-components";

export const Button = styled.button`
  width: 33.3%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: green;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
