import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onBackground};
  transition: all 0.35s;
`;
