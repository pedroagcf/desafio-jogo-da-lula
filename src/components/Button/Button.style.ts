import styled from "@emotion/styled";
import theme from "styles/theme";

// interface ButtonProps {
//   backgroundColor: string
//   isDisabled: boolean
// }

const Button = styled.button`
  font-weight: bold;

  padding: 10px 16px;
  border: none;
  border-radius: 4px; 

  background-color: ${theme.colors.primary.base};
  color: white;
`

export {
  Button
}