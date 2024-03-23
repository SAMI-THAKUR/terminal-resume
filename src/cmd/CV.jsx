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
        window.open(
          "https://drive.google.com/file/d/1XPV0qowlpPDxNqVZ0gMpFz_HzxUjbEu2/view?usp=sharing",
          "_blank"
        );
      }, 4000)}
    </div>
  );
}

export default CV;
