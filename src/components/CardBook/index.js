import { api } from "../../services/api";
import { useLocation } from "react-router-dom";
import ButtonCard from "../Button";
import {
  Container,
  ContainerImg,
  ContainerText,
  ContainerButton,
  Button,
} from "./styles";

function Card({ data, getBooksCategories }) {
  const location = useLocation();

  const handleClick = (status) => {
    api
      .post("/comments", { bookId: data.id, comment: status })
      .then(function (response) {
        location.pathname === "/"
          ? getBooksCategories()
          : alert("Categoria Selecionada!");
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
