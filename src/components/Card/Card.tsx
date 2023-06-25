import { ReactNode } from "react";
import { Box } from "./Card.style";

interface CardProps {
  header: ReactNode;
  content: ReactNode;
}
const Card = ({ header, content }: CardProps) => {
  return (
    <Box>
      {header}
      {content}
    </Box>
  );
};

export default Card;
