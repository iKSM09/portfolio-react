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

import styled from "styled-components";

const SkillContainer = styled.section`
  max-width: 1200px;
  width: calc(100vw - 8em);
  margin-inline: auto;
  margin-bottom: 80px;

  h2 {
    margin-bottom: 40px;
  }

  div {
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 48px;
    justify-items: center;

    *:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SkillSection = () => {
  return (
    <SkillContainer>
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
    </SkillContainer>
  );
};

export default SkillSection;
