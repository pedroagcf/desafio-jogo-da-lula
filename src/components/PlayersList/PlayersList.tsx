import { List, ListItem, Amount, Text } from "./PlayersList.style";

interface Player {
  avatar?: string;
  name: string;
  amount: string;
}

interface PlayersListProps {
  players: Player[];
}

const PlayersList = ({ players }: PlayersListProps) => {
  return (
    <List>
      {players?.map((player) => (
        <ListItem>
          <Text>{player.name}</Text>
          <Amount>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(player.amount))}
          </Amount>
        </ListItem>
      ))}
    </List>
  );
};

export default PlayersList;
