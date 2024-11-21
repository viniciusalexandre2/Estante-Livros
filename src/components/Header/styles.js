import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
  padding: 5px;
  padding-right: 50px;
  width: 100vw;
  min-height: 85px;

  img {
    width: 7%;
  }

  div {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;
export const ButtonNav = styled(Link)`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
  color: ${({ isActive }) => {
    if (isActive) {
      return "red";
    }
  }};

  padding-bottom: 5px;

  &:hover {
    color: red;
  }
`;
