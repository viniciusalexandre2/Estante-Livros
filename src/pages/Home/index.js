import { api } from "../../services/api";
import { useEffect } from "react";

import Header from "../../components/Header";

export default function Home() {
  useEffect(() => {
    api.get("/books").then(function (response) {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Estou Lendo</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div>
        <h1>Quero Ler</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div>
        <h1>Já Lido</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
