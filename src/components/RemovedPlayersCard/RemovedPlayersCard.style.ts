import styled from "@emotion/styled";

const Box = styled.div`
  margin: auto;
  padding; 0 60px;
`

const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[100]};
`

export {
  Box,
  Text
}