import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiStyledcomponents,
  SiFirebase,
} from "react-icons/si";

const SectionHead = styled.div`
  max-width: 1200px;
  width: calc(100vw - 8em);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ProjectCard = styled.div`
  max-width: 1150px;
  width: calc(100vw - 8em);
  margin-inline: auto;
  margin-block: 40px;
  background-color: ${({ theme }) => theme.surface01};
  color: ${({ theme }) => theme.onSurface};
  border-radius: 12px;
  display: flex;
  justify-content: start;
`;

const CardDetails = styled.div`
  padding: 24px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  font-size: calc(1vw + 1rem);

  a {
    font-size: calc(0.4vw + 1rem);
  }
`;

const CardTitle = styled.div`
  margin-bottom: 16px;

  h3 {
    margin-top: 4px;
    font-size: calc(1.5vw + 1rem);
  }
`;

const CardDesc = styled.p`
  margin-bottom: 24px;
  font-size: calc(0.4vw + 1rem);
`;

const CardSkills = styled.div`
  margin-bottom: 24px;
  margin-inline: auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.tertiaryContainer};
  color: ${({ theme }) => theme.onTertiaryContainer};
  border-radius: 24px;

  h4 {
    text-decoration: underline;
    margin-bottom: 24px;
    font-size: calc(1vw + 1rem);
  }

  div {
    font-size: calc(3vw + 1rem);
    display: flex;
    flex-wrap: nowrap;

    * {
      margin-inline: 16px;

      &:hover {
        color: ${({ theme }) => theme.tertiary};
      }
    }
  }
`;

const Tags = styled.small`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: calc(0.2vw + 1rem);
`;

const ButtonContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  * {
    margin-inline: 20px;
  }
`;

const IconLink = styled.a`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin-inline: 4px;
  }

  &:hover {
    color: ${({ theme }) => theme.secondary};
    /* font-size: 2.8rem; */
    /* transition: font-size 0.2s ease; */
  }
`;

const Image = styled.img`
  width: 100%;
  padding: 24px;
  object-fit: cover;
  border-radius: 32px;
`;

const ProjectSection = () => {
  return (
    <>
      <SectionHead>
        <h2>Latest Projects</h2>
        <a href="#">See All Projects</a>
      </SectionHead>

      <ProjectCard>
        <Image
          src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
          alt="Project"
        />
        <CardDetails>
          <CardTitle>
            <Tags>Tag</Tags>
            <h3>Project Name</h3>
          </CardTitle>

          <CardDesc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            magni quo atque laudantium quod porro!
          </CardDesc>

          <CardSkills>
            <h4>Made with:</h4>
            <div>
              <SiJavascript title="JavaScript" />
              <SiReact title="React.js" />
              <SiReactrouter title="React Router" />
              <SiStyledcomponents title="Styled Components" />
              <SiFirebase title="Firebase" />
            </div>
          </CardSkills>

          <ButtonContainer>
            <IconLink href="https://github.com/iKSM09" target="_blank">
              <p>View live</p>
            </IconLink>
            <IconLink href="https://github.com/iKSM09" target="_blank">
              <FaGithub />
              <p>Github</p>
            </IconLink>
          </ButtonContainer>
        </CardDetails>
      </ProjectCard>

      <ProjectCard>
        <CardDetails>
          <CardTitle>
            <Tags>Tag</Tags>
            <h3>Project Name</h3>
          </CardTitle>

          <CardDesc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            magni quo atque laudantium quod porro!
          </CardDesc>

          <CardSkills>
            <h4>Made with:</h4>
            <div>
              <SiJavascript title="JavaScript" />
              <SiReact title="React.js" />
              <SiReactrouter title="React Router" />
              <SiStyledcomponents title="Styled Components" />
              <SiFirebase title="Firebase" />
            </div>
          </CardSkills>

          <ButtonContainer>
            <IconLink href="https://github.com/iKSM09" target="_blank">
              <p>View live</p>
            </IconLink>
            <IconLink href="https://github.com/iKSM09" target="_blank">
              <FaGithub />
              <p>Github</p>
            </IconLink>
          </ButtonContainer>
        </CardDetails>
        <Image
          src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
          alt="Project"
        />
      </ProjectCard>
    </>
  );
};

export default ProjectSection;
