import { Label } from "../../styles/themes/typography";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  ToggleButton,
} from "./navigation.styles";

const Navigation = (props) => {
  const { toggleThemeHandler } = props;
  return (
    <>
      <NavigationContainer>
        <h2>Kunal Sharma</h2>
        <NavLinks>
          <NavLink>
            <a href="#skills">Skills</a>
          </NavLink>
          <NavLink>
            <a href="#projects ">Work</a>
          </NavLink>
          <NavLink>
            <a href="#footer">Get in Touch</a>
          </NavLink>
          <NavLink>
            <ToggleButton onClick={toggleThemeHandler}>
              <Label>Theme</Label>
            </ToggleButton>
          </NavLink>
        </NavLinks>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
