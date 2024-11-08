import { api } from "../../services/api";
import ButtonCard from "../Button";
import {
  Container,
  ContainerImg,
  ContainerText,
  ContainerButton,
  Button,
} from "./styles";

function Card({ data }) {
  const handleClick = (status) => {
    api
      .post("/comments", { bookId: data.id, comment: status })
      .then(function (response) {
        console.log(response.data);
      });
  };
  return (
    <Container>
      <ContainerImg>
        <img src={data.imageLinks.thumbnail} alt="Capa do Livro" />
      </ContainerImg>
      <ContainerText>
        <h1>{data.title}</h1>
        <ContainerButton>
          <ButtonCard onClick={() => handleClick("estoulendo")}>
            Estou lendo
          </ButtonCard>
          <ButtonCard onClick={() => handleClick("queroler")}>
            Quero ler
          </ButtonCard>
          <ButtonCard onClick={() => handleClick("jalido")}>Já lido</ButtonCard>
        </ContainerButton>
      </ContainerText>
    </Container>
  );
}

export default Card;
