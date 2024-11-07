import { Container, ContainerImg, ContainerText } from "./styles";

function Card({ data }) {
  console.log(data);
  return (
    <Container>
      <ContainerImg>
        <img src={data.imageLinks.thumbnail} alt="Descrição da imagem" />
      </ContainerImg>
      <ContainerText>
        <h1>{data.title}</h1>
      </ContainerText>
    </Container>
  );
}

export default Card;
