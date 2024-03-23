import Typewriter from "typewriter-effect";
export default function Error() {
  return (
    <p className="text-white fade-in ml-10 w-[28rem] text-sm font-tech tracking-wider leading-7">
      <Typewriter
        options={{
          autoStart: true,
          loop: false,
          cursor: "",
          delay: 0.1,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Error: Command not found. Type `help` to view the list of available commands."
            )
            .start();
        }}
      />
    </p>
  );
}
