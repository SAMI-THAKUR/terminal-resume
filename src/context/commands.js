import { createContext, useContext } from "react";

export const Command = createContext({
  history: [],
  currentCommand: "",
  setHistory: (cmd) => {},
  commandEntered: (cmd) => {},
});

export const CommandProvider = Command.Provider;
export const useCommand = () => useContext(Command);
