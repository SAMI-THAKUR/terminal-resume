import Typewriter from "typewriter-effect";

let list = [
  {
    code: "002",
    name: "Personal Potfolio",
    link: "https://sami-portfolio-omega.vercel.app/",
    github: "https://github.com/SAMI-THAKUR/SAMI-Portfolio",
    desc: `I Needed a platform to showcase personal projects and skills. Developed a responsive portfolio website using HTML, CSS, JS, Tailwind CSS & Firebase for database integration. Utilized front-end technologies to design and implement the website, showcasing various
    projects and skills`,
    tech: `HTML | CSS | JavaScript | TailwindCSS | Firebase`,
  },
  {
    code: "001",
    name: "Currency Converter",
    link: "https://currency-exchange-rate-six.vercel.app/",
    github: "https://currency-exchange-rate-six.vercel.app/",
    desc: `Recognized the need for a practical currency conversion tool. Developed a responsive currency converter application using React and integrated currency
    exchange API for real-time rates.`,
    tech: `React JS | REST API | JavaScript | TailwindCSS`,
  },
  {
    code: "003",
    name: "Terminal Portfolio",
    link: "https://link-tree-liart.vercel.app/",
    github: "https://currency-exchange-rate-six.vercel.app/",
    desc: `Developed a terminal-based portfolio website using HTML, CSS, and JavaScript. The website is designed to mimic a terminal interface, showcasing various projects and skills.`,
    tech: `React JS | TailwindCSS`,
  },
];

export default function Project_Detail(props) {
  const { code } = props;
  return (
    <>
      {list
        .filter((value) => value.code === code)
        .map((value, index) => {
          return (
            <Template
              key={index}
              name={value.name}
              link={value.link}
              tech={value.tech}
              github={value.github}
              desc={value.desc}
            />
          );
        })}
    </>
  );
}

function Template(props) {
  const { name, link, tech, github, desc } = props;
  return (
    <div className="text-white ml-10 text-sm">
      <h1 className="mb-2 font-tech font-bold text-cyan-400 text-base mt-2">
        {name}
      </h1>
      <pre className="text-sm text-cyan-400 mb-2">{tech}</pre>
      <p className="text-white w-[28rem] text-sm font-tech tracking-wider leading-7 mb-2">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            cursor: "",
            delay: 0.1,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(desc).start();
          }}
        />
      </p>
      <div className="flex gap-3 mb-2 font-bold">
        <a href={link} className=" text-violet-600">
          LIVE
        </a>
        <span>|</span>
        <a href={github} className="text-violet-600">
          GITHUB
        </a>
      </div>
    </div>
  );
}
