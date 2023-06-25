import styled from "@emotion/styled"

const List = styled.ul`
  overflow-y: scroll;
  height: 100%;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[900]};
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const ListItem = styled.li`
  display: flex;
  padding: 16px 0px;
  color: ${({ theme }) => theme.colors.gray[100]};
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray[100]};
`

const Amount = styled.span`
  font-weight: bold;
`

const Text = styled.p`
  font-weight: normal;
  flex-grow: 1;
`

export {
  List,
  ListItem,
  Amount,
  Text
}

