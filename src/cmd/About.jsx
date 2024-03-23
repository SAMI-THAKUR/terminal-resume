import Typewriter from "typewriter-effect";

function About() {
  return (
    <>
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
                "Hello, my name is Sami I am a second-year engineering student at VESIT (Mumbai), majoring in Artificial Intelligence and Data Science. Currently my main focus is learning FULL STACK WEB DEVELOPMENT and DSA in JAVA and in the future I aspire to learn about MACHINE LEARNING & DATA SCIENCE"
              )
              .start();
          }}
        />
        {/* // Hello, my name is Sami I am a second-year engineering student at
        VESIT // (Mumbai), majoring in Artificial Intelligence and Data Science.
        // Currently my main focus is learning FULL STACK WEB DEVELOPMENT and
        DSA // in JAVA and in the future I aspire to learn about MACHINE
        LEARNING & // DATA SCIENCE */}
      </p>
    </>
  );
}

export default About;
