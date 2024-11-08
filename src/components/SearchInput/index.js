import { InputSearch, Container } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onSearch, placeholder }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <Container>
        <SearchIcon />
        <InputSearch
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Container>
    </>
  );
}
