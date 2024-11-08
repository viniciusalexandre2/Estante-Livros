import styled from "styled-components";

export const Button = styled.button`
  width: 33.3%;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: ${({ children }) => {
    if (children === "Estou lendo") {
      return "#fa7217";
    } else if (children === "Quero ler") {
      return "#404dff";
    } else {
      return "green";
    }
  }};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
