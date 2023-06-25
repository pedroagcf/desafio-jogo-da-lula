import Console from "components/Console/Console";
import PlayersCard from "components/PlayersCard/PlayersCard";
import RemovedPlayersCard from "components/RemovedPlayersCard/RemovedPlayersCard";
import { useGame } from "hooks/useGame";
import { Container } from "./GamePanel.style";

const GamePanel = () => {
  const { remainingPlayers, removedPlayers } = useGame();

  return (
    <Container>
      <PlayersCard players={remainingPlayers} />
      <Console />
      <RemovedPlayersCard players={removedPlayers} />
    </Container>
  );
};

export default GamePanel;
