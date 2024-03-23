import "./Widget.css";

function Landing() {
  return (
    <div>
      <h2 className="text-text ml-10 font-tech tracking-wider mt-5">
        sami@pixelresume:~$ | sami.thakur2804@gmail.com
      </h2>
      <pre class="font-mono text-banner text-[0.7rem]  ml-10">
        {String.raw`--------------------------------------------------------------------------------------------------------------------

            ███████╗ █████╗ ███╗   ███╗██╗    ████████╗██╗  ██╗ █████╗ ██╗  ██╗██╗   ██╗██████╗ 
            ██╔════╝██╔══██╗████╗ ████║██║    ╚══██╔══╝██║  ██║██╔══██╗██║ ██╔╝██║   ██║██╔══██╗
            ███████╗███████║██╔████╔██║██║       ██║   ███████║███████║█████╔╝ ██║   ██║██████╔╝
            ╚════██║██╔══██║██║╚██╔╝██║██║       ██║   ██╔══██║██╔══██║██╔═██╗ ██║   ██║██╔══██╗
            ███████║██║  ██║██║ ╚═╝ ██║██║       ██║   ██║  ██║██║  ██║██║  ██╗╚██████╔╝██║  ██║
            ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
                                                                                    
---------------------------------------------------------------------------------------------------------------------     
        `}
      </pre>
      <h2 className="text-text ml-10 font-tech tracking-wider">
        Welcome to PixelResume Terminal v1.0 🚀 <br />
        Active Processes: 786 | CPU Usage: 20% | Memory: 8GB
      </h2>
      <p className="text-text font-tech ml-10 text-[20px , 10px]">
        Inspired by{" "}
        <a href="https://fkcodes.com/" className="links">
          ForrestKnights
        </a>
        <br />
        For a list of available commands, type{" "}
        <span className="glow">'help'</span>.
      </p>
    </div>
  );
}

export default Landing;
