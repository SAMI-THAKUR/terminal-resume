import Typewriter from "typewriter-effect";

let lang = String.raw`Languages: JavaScript | Python | C++ | Java`;
let front = String.raw`FrontEnd: React | Redux | HTML | CSS | Tailwind | Bootstrap | Flutter`;
let back = String.raw`BackEnd: Node.js | Express | MongoDB | Firebase | REST API`;
let tools = String.raw`Tools: Git | GitHub | VSCode | Postman`;

function Skills() {
  return (
    <>
      <pre className="text-[#d5d5d5] ml-10 text-sm font-tech tracking-wider leading-7">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 0.1,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(lang + "\n")
              .pauseFor(100)
              .typeString(front + "\n")
              .pauseFor(100)
              .callFunction(() => {
                window.scrollTo(0, document.documentElement.scrollHeight);
              })
              .pasteString(back + "\n")
              .pauseFor(200)
              .pasteString(tools)
              .callFunction(() => {
                window.scrollTo(0, document.documentElement.scrollHeight);
              })
              .start();
          }}
        />
      </pre>
    </>
  );
}

export default Skills;
