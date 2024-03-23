import Typewriter from "typewriter-effect";
import { useState } from "react";
import "../cmd.css";

let list = [
  {
    name: "Currency Converter",
    link: "https://currency-exchange-rate-six.vercel.app/",
    code: "001",
  },
  {
    name: "Personal Portfolio",
    link: "https://sami-portfolio-omega.vercel.app/",
    code: "002",
  },
  {
    name: "Terminal Portfolio",
    link: "",
    code: "004",
  },
  {
    name: "Personal LinkTree",
    link: "https://link-tree-liart.vercel.app/",
    code: "003",
  },
  {
    name: "Weather App",
    link: "",
    code: "004",
  },
];

function Project_List() {
  const [typing, setTyping] = useState(false);
  return (
    <>
      <pre className="text-[#d5d5d5] ml-10 text-sm font-tech tracking-wider leading-7">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 0.4,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Click on the links to view the projects")
              .typeString("\n")
              .typeString("type `project-code` to view the details")
              .start();
          }}
        />
      </pre>
      {list.map((value, index) => {
        return (
          <Link
            link={value.link}
            link_name={value.name}
            id={value.code}
            key={index}
          />
        );
      })}
    </>
  );
}

function Link(props) {
  const { link, link_name, id } = props;
  return (
    <div className="ml-10 text-sm tracking-wider leading-7 w-fit">
      <a className="links font-mono  font-bold" href={link}>
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 0.4,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(link_name)
              .typeString(" --> ")
              .typeString(id)
              .start();
          }}
        />
      </a>
    </div>
  );
}

export default Project_List;
