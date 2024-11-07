import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  width: 200px;
`;

export const ContainerImg = styled.div`
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

export const ContainerText = styled.div`
  margin-top: 13px;
  font-size: 10px;
`;
