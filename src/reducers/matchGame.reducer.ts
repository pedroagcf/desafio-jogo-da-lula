
export enum Types {
  Init = 'INIT_ROUND',
  Vote = 'VOTE_ROUND',
  Next = 'NEXT_ROUND',
}

export function matchGameReducer(state, action) {

  switch (action.type) {

    case Types.Init: {
      const allRemovedPlayers = state.removedPlayers.concat(action.payload.removedPlayers)
      const prize = allRemovedPlayers.length * 42000000
      const activePlayers = action.payload.remainingPlayers

      const removedPlayers = allRemovedPlayers.map(player => ({ ...player, amount: 0 }))
      const remainingPlayers = activePlayers.map((player) => ({ ...player, amount: prize / activePlayers.length }))

      return {
        ...state,
        remainingPlayers,
        removedPlayers,
        prize,
        round: state.round + 1
      }
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}