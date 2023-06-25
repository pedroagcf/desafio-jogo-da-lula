import { players as playersData } from "data/players";
import { createContext, PropsWithChildren, ReactNode, useReducer } from "react";
import { matchGameReducer } from "reducers/matchGame.reducer";

const initialState = {
  remainingPlayers: playersData,
  removedPlayers: [],
  prize: 0,
  round: 1,
  votes: 0,
};

export const MatchGameContext = createContext(null);

export function MatchGameProvider({ children }: PropsWithChildren<ReactNode>) {
  const [players, dispatch] = useReducer(matchGameReducer, initialState);

  return (
    <MatchGameContext.Provider value={{ players, dispatch }}>
      {children}
    </MatchGameContext.Provider>
  );
}
