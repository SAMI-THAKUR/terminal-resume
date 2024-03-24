import "./App.css";

// HOOKS //
import { useState, useEffect } from "react";
// REDUX //
import { useSelector, useDispatch } from "react-redux";

// WIDGETS //
import { Landing, Input, Error } from "./widgets/widget";
// CMDS //
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
// REDUCERS FROM FEATURES //
import { cmdEntered, history } from "./features/CMD";

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

// REGEX for pattern matching of project-001 to project-005 //
var pattern = /^project-00[1-5]$/;

function App() {
  // holds the components to be rendered //
  const [components, setComponents] = useState([
    { id: 0, component: <Input id={0} /> },
  ]);

  // Redux store and reducers //
  const dispatch = useDispatch();
  const cmdCurrent = useSelector((state) => state.command.currentCommand);

  // Function to execute the command //
  const execute = () => {
    const newId = components.length;
    dispatch(history(cmdCurrent));
    if (cmdCurrent === "clear") {
      setComponents([{ id: newId + 1, component: <Input id={newId + 2} /> }]);
    } else if (cmd[cmdCurrent] !== undefined) {
      setComponents((prevComponents) => [
        ...prevComponents,
        { id: newId + 1, component: cmd[cmdCurrent] },
        { id: newId + 2, component: <Input id={newId + 2} /> },
      ]);
    } else if (pattern.test(cmdCurrent)) {
      let id = cmdCurrent.split("-")[1];
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
    dispatch(cmdEntered(""));
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
  }, [cmdCurrent]);

  return (
    <div className="pb-10">
      <Landing />
      {components.map(({ id, component }) => (
        <div key={id} className="mt-0">
          {component}
        </div>
      ))}
    </div>
  );
}

export default App;
