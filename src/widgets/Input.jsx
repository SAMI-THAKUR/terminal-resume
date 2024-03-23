import "./Widget.css";
import { useContext, useState, useEffect } from "react";
import { Command } from "../context/commands";

function Input(id) {
  const { history, commandEntered, currentCommand } = useContext(Command);
  const [active, setActive] = useState(true);
  const [inputValue, setInputValue] = useState(currentCommand);
  const [historyIndex, setHistoryIndex] = useState(history.length - 1);
  const handleChanges = (e) => {
    setInputValue(e.target.value);
    // commandEntered(e.target.value);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commandEntered(inputValue);
      setActive(false);
    }
  };

  const handleArrowKey = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex >= 0) {
        setInputValue(history[historyIndex]);
        setHistoryIndex((prevIndex) => prevIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        setHistoryIndex((prevIndex) => prevIndex + 1);
        setInputValue(history[historyIndex + 1]);
      } else {
        setHistoryIndex(history.length - 1);
        setInputValue(currentCommand);
      }
    }
  };

  return (
    <div className="flex gap-2 ml-10 mt-4" key={id}>
      <h2 className="text-banner font-mono glow font-bold">
        <span className="text-[#00ff00]">Guest</span>@PixelResume ~
      </h2>
      <div class="cursor ">
        <input
          type="text"
          className="bg-transparent focus:text-text focus:border-none border-none text-text font-tech  text-[20px , 10px] outline-none"
          onChange={(e) => {
            handleChanges(e);
          }}
          readOnly={!active}
          onKeyDown={(e) => {
            handleEnterKey(e);
            handleArrowKey(e);
          }}
          onBlur={({ target }) => (active ? target.focus() : null)}
          autoFocus={active}
          value={inputValue}
        />
        <i></i>
      </div>
    </div>
  );
}

export default Input;
