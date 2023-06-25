import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Row = styled.div`
  margin-top: 4rem;
`

export {
  Container,
  Row
}