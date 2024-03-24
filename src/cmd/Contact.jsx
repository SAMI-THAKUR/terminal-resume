let social = [
  {
    name: "GITHUB",
    link: "https://github.com/SAMI-THAKUR",
    pcolor: "#5331c2",
  },
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/sami-thakur-6072b8256/",
    pcolor: "#0a66c2",
  },
  {
    name: "EMAIL",
    link: "mailto:samithakur7860@gmail.com",
    pcolor: "#e4405f",
  },
  {
    name: "LEETCODE",
    link: "https://leetcode.com/user0351hg/",
    pcolor: "#f89f1b",
  },
  {
    name: "TWITTER",
    link: "https://twitter.com/SamiThakur28",
    pcolor: "#1da1f2",
  },
  {
    name: "INSTAGRAM",
    link: "https://www.instagram.com/sami_thakur_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    pcolor: "#dd2a7b",
  },
];

export default function Contact() {
  return (
    <div className="ml-10 gap-2">
      <p className="mb-2 text-white font-mono w-72 font-thin">
        Thank you for investing your time in exploring my terminal. Feel free to
        reach out to me on any of the following platforms.
      </p>
      {social.map((value, index) => {
        return (
          <a
            href={value.link}
            class=" text-white text-sm font-bold me-2 px-2.5 py-0.5 rounded font-mono social-links social tracking-wider"
            style={{
              backgroundColor: value.pcolor,
            }}
            key={index}
          >
            {value.name}
          </a>
        );
      })}
    </div>
  );
}
