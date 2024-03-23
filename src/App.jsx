import "./App.css";
import { useState, useContext, useEffect } from "react";
import { Landing, Input, Error } from "./widgets/widget";
import {
  Help,
  Skills,
  About,
  CV,
  GUI,
  Education,
  Project_List,
  Project_Detail,
  Contact,
} from "./cmd/cmd";
import { Command } from "./context/commands";

const cmd = {
  help: <Help />,
  gui: <GUI />,
  skills: <Skills />,
  about: <About />,
  cv: <CV />,
  edu: <Education />,
  projects: <Project_List />,
  contact: <Contact />,
};

// for project id //
var pattern = /^project-00[1-5]$/;

function scrollToBottom() {
  const scrollingElement = document.scrollingElement || document.body;
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

function App() {
  const [currentCommand, setCmd] = useState("");
  const [history, setHistory] = useState([""]);
  const [components, setComponents] = useState([
    { id: 0, component: <Input id={0} /> },
  ]);
  const [active, setActive] = useState(0);

  const commandEntered = (cmd) => {
    setCmd(cmd);
    setHistory([...history, cmd]);
  };

  const execute = () => {
    const newId = components.length;
    setActive(newId - 1);
    if (currentCommand === "clear") {
      setActive(0);
      setComponents([{ id: newId + 2, component: <Input id={newId + 2} /> }]);
      return;
    } else if (cmd[currentCommand] !== undefined) {
      setComponents((prevComponents) => [
        ...prevComponents,
        { id: newId + 1, component: cmd[currentCommand] },
        { id: newId + 2, component: <Input id={newId + 2} /> },
      ]);
    } else if (pattern.test(currentCommand)) {
      let id = currentCommand.split("-")[1];
      setComponents((prevComponents) => [
        ...prevComponents,
        {
          id: newId + 1,
          component: <Project_Detail code={id} id={newId + 1} />,
        },
        { id: newId + 2, component: <Input id={newId + 2} /> },
      ]);
    } else {
      setComponents((prevComponents) => [
        ...prevComponents,
        { id: newId + 1, component: <Error id={newId + 1} /> },
        { id: newId + 1, component: <Input id={newId + 1} /> },
      ]);
    }
    setCmd("");
    scrollToBottom();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        execute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [commandEntered, currentCommand]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <Command.Provider
      value={{
        history,
        currentCommand,
        setHistory,
        commandEntered,
      }}
    >
      <div className="mb-5">
        <Landing />
        {components.map(({ id, component }) => (
          <div key={id} className="mt-0">
            {component}
          </div>
        ))}
      </div>
    </Command.Provider>
  );
}

export default App;
