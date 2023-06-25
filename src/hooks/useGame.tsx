import { MatchGameContext } from "context/MatchGameContext";
import { useContext } from "react";

export function useGame() {
  const { players, dispatch } = useContext(MatchGameContext);
  return {
    remainingPlayers: players.remainingPlayers,
    removedPlayers: players.removedPlayers,
    prize: players.prize,
    round: players.round,
    votes: players.votes,
    dispatch,
  };
}
