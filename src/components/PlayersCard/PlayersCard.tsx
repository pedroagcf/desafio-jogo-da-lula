import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import PlayersList from "components/PlayersList/PlayersList";

interface Player {
  name: string;
  amount: string;
}
interface PlayersCardProps {
  players: Player[];
}

const PlayersCard = ({ players }: PlayersCardProps) => {
  return (
    <Card
      header={
        <CardHeader label="Participantes" count={`${players?.length}/69`} />
      }
      content={<PlayersList players={players} />}
    ></Card>
  );
};

export default PlayersCard;
