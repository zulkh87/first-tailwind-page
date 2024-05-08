import { createContext } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const contextValue = {};

  return <PlayerContext value={contextValue}>{props.children}</PlayerContext>;
};

export default PlayerContextProvider;
