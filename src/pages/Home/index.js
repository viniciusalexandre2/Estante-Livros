import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Estante de Livros</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => navigate("/search")}>Pesquisar Livros</button>
    </div>
  );
}
