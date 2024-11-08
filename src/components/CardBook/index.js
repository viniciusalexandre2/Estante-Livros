import ButtonCard from "../Button";
import {
  Container,
  ContainerImg,
  ContainerText,
  ContainerButton,
  Button,
} from "./styles";

function Card({ data }) {
  console.log(data);
  return (
    <Container>
      <ContainerImg>
        <img src={data.imageLinks.thumbnail} alt="Capa do Livro" />
      </ContainerImg>
      <ContainerText>
        <h1>{data.title}</h1>
        <ContainerButton>
          <ButtonCard>Estou Lendo</ButtonCard>
          <ButtonCard>Quero ler</ButtonCard>
          <ButtonCard>Já Lido</ButtonCard>
        </ContainerButton>
      </ContainerText>
    </Container>
  );
}

export default Card;
