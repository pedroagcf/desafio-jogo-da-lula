import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import PlayersList from "components/PlayersList/PlayersList";
import { Text, Box } from "./RemovedPlayersCard.style";

interface Player {
  name: string;
  amount: string;
}
interface RemovedPlayersCard {
  players: Player[];
}

const RemovedPlayersCard = ({ players }: RemovedPlayersCard) => {
  const Content =
    players?.length > 0 ? (
      <PlayersList players={players} />
    ) : (
      <Box>
        <Text>{"Nenhum participante eliminado até o momento"}</Text>
      </Box>
    );

  return (
    <Card
      header={
        <CardHeader label="Participantes" count={`${players?.length}/69`} />
      }
      content={Content}
    ></Card>
  );
};

export default RemovedPlayersCard;
