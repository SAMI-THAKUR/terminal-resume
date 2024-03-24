import Typewriter from "typewriter-effect";

function CV() {
  return (
    <div>
      <h3 className="text-white ml-10 w-[28rem] text-sm font-tech tracking-wider leading-7">
        <Typewriter
          options={{
            strings: "fetching resume...",
            autoStart: true,
            loop: false,
            changeDelay: 0.1,
            cursor: "",
          }}
        />
      </h3>
      {setTimeout(() => {
        window.open("src/assets/Resume_Sami_Thakur.pdf", "_blank");
      }, 4000)}
    </div>
  );
}

export default CV;
