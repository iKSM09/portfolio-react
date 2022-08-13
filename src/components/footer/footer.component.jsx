import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 160px;

  background-color: ${({ theme }) => theme.surfaceVariant};
  color: ${({ theme }) => theme.onSurfaceVariant};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.section`
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 16px;
`;

const IconWrapper = styled.span`
  width: 64px;
  height: 64px;
  margin-inline: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLink = styled.a`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    font-size: 2.8rem;
    transition: font-size 0.2s ease;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <IconWrapper>
          <IconLink href="https://github.com/iKSM09" target="_blank">
            <FaGithub />
          </IconLink>
        </IconWrapper>
        <IconWrapper>
          <IconLink href="https://in.linkedin.com/in/iksm09" target="_blank">
            <FaLinkedin />
          </IconLink>
        </IconWrapper>
        <IconWrapper>
          <IconLink href="https://github.com/iKSM09" target="_blank">
            <FaEnvelope />
          </IconLink>
        </IconWrapper>
      </IconContainer>
      <p className="copyright">&#169; Kunal Sharma</p>
    </FooterContainer>
  );
};

export default Footer;
