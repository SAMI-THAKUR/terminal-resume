import Typewriter from "typewriter-effect";

function GUI() {
  return (
    <div>
      <h3 className="text-white ml-10 w-[28rem] text-sm font-tech tracking-wider leading-7">
        <Typewriter
          options={{
            strings: "enable GUI mode...",
            autoStart: true,
            loop: false,
            changeDelay: 0.1,
            cursor: "",
          }}
        />
      </h3>
      {setTimeout(() => {
        window.open("https://sami-portfolio-omega.vercel.app/");
      }, 4000)}
    </div>
  );
}

export default GUI;
