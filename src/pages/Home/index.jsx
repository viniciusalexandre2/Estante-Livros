import { api } from "../../services/api";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Card from "../../components/CardBook";
import { ContainerBooks, ContainerMain, ContainerReading } from "./styles";

export default function Home() {
  const [reading, setReading] = useState([]);
  const [wantRead, setWantRead] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);

  const getBooksCategories = () => {
    const arrayBooksEstouLendo = [];
    const arrayBooksQueroLer = [];
    const arrayBooksJaLido = [];

    api.get("/books").then((response) => {
      response.data.map((book) => {
        const lastUpdate = book.comments.length - 1;
        if (book.comments[lastUpdate] === "Estou lendo") {
          arrayBooksEstouLendo.push(book);
        } else if (book.comments[lastUpdate] === "Quero ler") {
          arrayBooksQueroLer.push(book);
        } else if (book.comments[lastUpdate] === "Já lido") {
          arrayBooksJaLido.push(book);
        }
        setReading(arrayBooksEstouLendo);
        setWantRead(arrayBooksQueroLer);
        setAlreadyRead(arrayBooksJaLido);
      });
    });
  };

  useEffect(() => {
    getBooksCategories();
  }, []);
  return (
    <>
      <Header />
      <ContainerMain>
        <ContainerReading>
          <h1>Estou Lendo</h1>
          <ContainerBooks>
            {reading &&
              reading.map((book) => (
                <Card
                  data={book}
                  getBooksCategories={getBooksCategories}
                  key={book.id}
                />
              ))}
          </ContainerBooks>
        </ContainerReading>
        <ContainerReading>
          <h1>Quero Ler</h1>
          <ContainerBooks>
            {wantRead &&
              wantRead.map((book) => (
                <Card
                  data={book}
                  getBooksCategories={getBooksCategories}
                  key={book.id}
                />
              ))}
          </ContainerBooks>
        </ContainerReading>
        <ContainerReading>
          <h1>Já Lido</h1>
          <ContainerBooks>
            {alreadyRead &&
              alreadyRead.map((book) => (
                <Card
                  data={book}
                  getBooksCategories={getBooksCategories}
                  key={book.id}
                />
              ))}
          </ContainerBooks>
        </ContainerReading>
      </ContainerMain>
    </>
  );
}
