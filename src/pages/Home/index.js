import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/books").then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      console.log(response.config);
    });
  }, []);

  return (
    <div>
      <h1>Estante de Livros</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => navigate("/search")}>Pesquisar Livros</button>
    </div>
  );
}
