import { Button } from "./styles";

export default function ButtonCard({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
