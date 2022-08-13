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
            <a href="">About</a>
          </NavLink>
          <NavLink>
            <a href="">Skills</a>
          </NavLink>
          <NavLink>
            <a href="">Work</a>
          </NavLink>
          <NavLink>
            <a href="">Get in Touch</a>
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
