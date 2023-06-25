import { Counter, Label, Row } from "./Card.style";

// `${players.length}/69`
interface CardHeaderProps {
  label: string;
  count: string;
}

const CardHeader = ({ label, count }: CardHeaderProps) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Counter>{count}</Counter>
    </Row>
  );
};

export default CardHeader;
