import { ButtonHTMLAttributes } from "react";
import { Button as StyledButton } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
