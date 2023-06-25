import styled from "@emotion/styled";

interface BoxProps {
  padding?: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 3fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  width: 450px;
  overflow: hidden;
  border-radius: 8px;

`

const Row = styled.div`
  display: flex;
  gap: 8px;

`

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  height: 80px;
  padding: 4px ${(props) => props.padding};
  
  background-color: ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;

`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const Text = styled.div`
  font-weight: normal;
`

const Amount = styled.span`
  font-weight: bold;
  font-size: 32px;
`
export {
  Grid,
  Row,
  Box,
  Content,
  Text,
  Amount
}