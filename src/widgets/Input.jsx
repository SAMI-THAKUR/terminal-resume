import "./Widget.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { history, cmdEntered } from "../features/CMD";

function Input(id) {
  // Redux store and reducers //
  const dispatch = useDispatch();
  const cmdhistory = useSelector((state) => state.command.history);
  const currentCommand = useSelector((state) => state.command.currentCommand);

  // State for input field //
  const [active, setActive] = useState(true);
  const [inputValue, setInputValue] = useState(currentCommand);
  const [historyIndex, setHistoryIndex] = useState(cmdhistory.length - 1);

  // Functions to handle input field //
  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  // Functions to handle enter key and arrow keys //
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(cmdEntered(e.target.value));
      dispatch(history(e.target.value));
      setActive(false);
    }
  };

  const handleArrowKey = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        setInputValue(cmdhistory[historyIndex - 1]);
        setHistoryIndex((prevIndex) => prevIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        setInputValue(cmdhistory[historyIndex + 1]);
        setHistoryIndex((prevIndex) => prevIndex + 1);
      } else {
        setInputValue(currentCommand);
        setHistoryIndex(history.length - 1);
      }
    }
  };

  return (
    <div className="flex gap-2 ml-10 mt-4" key={id}>
      <h2 className="text-banner font-mono glow font-bold">
        <span className="text-[#00ff00]">Guest</span>@PixelResume ~
      </h2>
      <div className="cursor ">
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
