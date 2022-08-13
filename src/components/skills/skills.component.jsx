import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiStyledcomponents,
  SiVuedotjs,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const SkillSection = () => {
  return (
    <>
      <h2>Skills</h2>
      <div style={{ fontSize: "56px" }}>
        <SiFigma title="Figma" />
        <SiHtml5 title="Html" />
        <SiCss3 title="Css" />
        <SiSass title="Scss" />
        <SiBootstrap title="Bootstrap" />
        <SiTailwindcss title="Tailwind" />
        <SiJavascript title="JavaScript" />
        <SiTypescript title="TypeScript" />
        <SiReact title="React.js" />
        <SiReactrouter title="React Router" />
        <SiStyledcomponents title="Styled Components" />
        <SiVuedotjs title="Vue.js" />
      </div>
    </>
  );
};

export default SkillSection;
