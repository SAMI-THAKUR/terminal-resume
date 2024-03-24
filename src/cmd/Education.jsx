import Typewriter from "typewriter-effect";
let edu = String.raw`|--- B.E in Artificial Intelligence and Data Science, {2022-26}
|    Vivekanand Education Society's Institute of Technology, Mumbai
|    CGPA: 9.38 (upto Sem-3)
|`;

let edu2 = String.raw`-------------------------------------------------------------
|--- HSC, {2020-22}
|    Percentage: 88.5%
|--------------------------------------------------------------
|--- SSC, {2020}
|    Percentage: 91.2%`;

function Education() {
  return (
    <>
      <pre className="text-[#d5d5d5] ml-10 text-sm font-tech tracking-wider leading-7 fade-in">
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 0.1,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(edu)
              .callFunction(() => {
                window.scrollTo(0, document.documentElement.scrollHeight);
              })
              .typeString(edu2)
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

export default Education;
