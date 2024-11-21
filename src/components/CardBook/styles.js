import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  width: 220px;
  background-color: #292929;
`;

export const ContainerImg = styled.div`
  height: 80%;
  img {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    height: 100%;
    height: 350px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  margin-top: 15px;
  font-size: 9px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
