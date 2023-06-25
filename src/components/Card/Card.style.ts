import styled from "@emotion/styled"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  
  height: 433px;
  width: 348px;
  padding: 16px 8px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[100]}
`

const Counter = styled.span`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray[100]}

`
export {
  Box,
  Row,
  Label,
  Counter
}