import { useLocation } from "react-router-dom";
import Logo from "../../asssets/logo.jpeg";
import { Container, ButtonNav } from "./styles";

function Header() {
  const location = useLocation();

  return (
    <Container>
      <img src={Logo} />
      <div>
        <ButtonNav to="/" isactive={location.pathname === "/"}>
          Home
        </ButtonNav>
        <ButtonNav to="/search" isactive={location.pathname === "/search"}>
          Pesquisar Livros
        </ButtonNav>
      </div>
    </Container>
  );
}

export default Header;
