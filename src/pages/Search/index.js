import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Página de Pesquisa</h1>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}
