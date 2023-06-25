import Button from "components/Button/Button";
import { Grid, Row, Box, Content, Text, Amount } from "./Console.style";
import Soldier from "../../assets/Soldier.svg";
import { useGame } from "hooks/useGame";

const Console = () => {
  const { remainingPlayers, dispatch, round, prize, votes } = useGame();

  function handleGameRound(players) {
    const { activePlayers, excludedPlayers } =
      getExcludedAndRemainingPlayers(players);

    dispatch({
      type: "INIT_ROUND",
      payload: {
        remainingPlayers: activePlayers,
        removedPlayers: excludedPlayers,
      },
    });
  }

  function getExcludedAndRemainingPlayers(totalPlayers) {
    const chancePercentage = 42;
    const excludedPlayers = [];
    const activePlayers = [];

    for (let i = 0; i < totalPlayers.length; i++) {
      const player = totalPlayers[i];
      const randomNumber = Math.floor(Math.random() * 101);
      if (randomNumber <= chancePercentage) {
        excludedPlayers.push(player);
      } else {
        activePlayers.push(player);
      }
    }

    return { activePlayers, excludedPlayers };
  }

  return (
    <Grid>
      <Row>
        <Box padding="32px">
          <Text>{"Round"}</Text>
          <Amount>{round}</Amount>
        </Box>
        <Box>
          <Text>{"Fundos do Prêmio"}</Text>
          <Amount>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(prize))}
          </Amount>
        </Box>
      </Row>
      <Content>
        <img src={Soldier} alt="soldier" />
        <Button
          title="Iniciar Rodada"
          onClick={() => handleGameRound(remainingPlayers)}
        />
      </Content>
      <Row>
        <Box>
          <Text>Votos para o fim do jogo</Text>
          <Amount>{votes}</Amount>
        </Box>
      </Row>
    </Grid>
  );
};

export default Console;
