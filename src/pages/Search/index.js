import Header from "../../components/Header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ContainerSearch, InputSearch, ContainerMain } from "./styles";
import Card from "../../components/CardBook";
import SearchBar from "../../components/SearchInput";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/books");
      setBooks(response.data);
    };

    fetchData();
  }, []);

  const filteredData = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <ContainerSearch>
        <h1>Todos os Livros</h1>
        <SearchBar
          onSearch={handleSearch}
          placeholder="Digite o nome do livro"
        />
      </ContainerSearch>
      <ContainerMain>
        {filteredData.map((book) => (
          <Card data={book} key={book.id} />
        ))}
      </ContainerMain>
    </>
  );
}
