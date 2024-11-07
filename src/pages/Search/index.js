import Header from "../../components/Header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ContainerSearch, InputSearch } from "./styles";

export default function Search() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then(function (response) {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <ContainerSearch>
        <h1>Todos os Livros</h1>ccc
        <InputSearch placeholder="Digite o nome do livro" />
      </ContainerSearch>
    </>
  );
}
