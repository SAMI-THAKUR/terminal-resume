import React from "react";
import Typewriter from "typewriter-effect";
var title;

let text1 = String.raw`{help}   -->   Shows this help message`;
let text2 = String.raw`{clear}  -->   Wipe the slate clean `;
let text3 = String.raw`{gui}    -->   Dive into graphical system`;
let text4 = String.raw`{cv}     -->   Fetch my resume`;
let text5 = String.raw`{skills} -->   See what I can do. `;
let text6 = String.raw`{about}  -->   concise summary of me.`;
let text7 = String.raw`{edu}    -->  Dive into my academic voyage.`;
let text8 = String.raw`{projects} -->  Roll out my projects.`;
let text9 = String.raw`{contact} -->   Shoot me a message...`;

function Help() {
  return (
    <>
      <pre className="typing-demo text-[#d5d5d5] ml-10 text-sm font-tech tracking-wider leading-7 mt-2">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 0.1,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(text1)
              .pasteString("\n")
              .pauseFor(10)
              .typeString(text2)
              .pasteString("\n")
              .pauseFor(10)
              .typeString(text3)
              .pasteString("\n")
              .pauseFor(10)
              .pasteString(text4)
              .pasteString("\n")
              .pauseFor(10)
              .pasteString(text5)
              .pasteString("\n")
              .callFunction(() => {
                window.scrollTo(0, document.body.scrollHeight);
              })
              .pauseFor(10)
              .pasteString(text6)
              .pasteString("\n")
              .pauseFor(10)
              .pasteString(text7)
              .pasteString("\n")
              .pauseFor(10)
              .pasteString(text8)
              .pasteString("\n")
              .pauseFor(10)
              .pasteString(text9)
              .callFunction(() => {
                window.scrollTo(0, document.body.scrollHeight);
              })
              .start();
          }}
        />
      </pre>
    </>
  );
}

export default Help;
