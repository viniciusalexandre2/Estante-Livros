import { api } from "../../services/api";
import { useLocation } from "react-router-dom";
import ButtonCard from "../Button";
import {
  Container,
  ContainerImg,
  ContainerText,
  ContainerButton,
} from "./styles";

function Card({ data, getBooksCategories }) {
  const location = useLocation();
  const lastUpdate = data.comments.length - 1;

  const handleClick = (status) => {
    api
      .post("/comments", { bookId: data.id, comment: status })
      .then(function (response) {
        getBooksCategories()

        location.pathname === "/"
          ? null
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
          <ButtonCard
            categorySelected={data.comments[lastUpdate]}
            onClick={() => handleClick("Estou lendo")}
          >
            Estou lendo
          </ButtonCard>
          <ButtonCard
            categorySelected={data.comments[lastUpdate]}
            onClick={() => handleClick("Quero ler")}
          >
            Quero ler
          </ButtonCard>
          <ButtonCard
            categorySelected={data.comments[lastUpdate]}
            onClick={() => handleClick("Já lido")}
          >
            Já lido
          </ButtonCard>
        </ContainerButton>
      </ContainerText>
    </Container>
  );
}

export default Card;
