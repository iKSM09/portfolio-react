import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 80px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.surface04};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;

  h2 {
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.li`
  margin-inline-start: 24px;
  font-size: ${({ theme }) => theme.title.medium};

  a {
    color: ${({ theme }) => theme.onSurface};
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${({ theme }) => theme.secondary};
    text-decoration: underline;
  }
`;

export const ToggleButton = styled.button`
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.onSecondary};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.primaryContainer};
    color: ${({ theme }) => theme.onPrimaryContainer};
  }
`;
