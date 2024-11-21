import { Button } from "./styles";

export default function ButtonCard({ children, onClick, categorySelected }) {
  const verifyCategory = categorySelected === children;

  return (
    <>
      {!verifyCategory && <Button onClick={onClick}>{children}</Button>}
    </>
  );
}
