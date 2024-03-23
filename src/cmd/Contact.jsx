let social = [
  {
    name: "GITHUB",
    link: "",
    pcolor: "#5331c2",
  },
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/sami-thakur/",
    pcolor: "#0a66c2",
  },
  {
    name: "EMAIL",
    link: "MAIL",
    pcolor: "#e4405f",
  },
  {
    name: "LEETCODE",
    link: "leetcode",
    pcolor: "#f89f1b",
  },
  {
    name: "TWITTER",
    link: "twitter",
    pcolor: "#1da1f2",
  },
  {
    name: "INSTAGRAM",
    link: "INSTA",
    pcolor: "#dd2a7b",
  },
];

export default function Contact() {
  return (
    <div className="ml-10 flex gap-2">
      {social.map((value, index) => {
        return (
          <a
            href={value.link}
            class=" text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
            style={{ backgroundColor: value.pcolor }}
          >
            {value.name}
          </a>
        );
      })}
    </div>
  );
}
