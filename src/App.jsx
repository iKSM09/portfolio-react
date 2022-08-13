import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  Navigation,
  SkillSection,
  ProjectSection,
  Footer,
  HeroSection,
} from "./components";

import { AppContainer } from "./styles/App.styles";

import { GlobalStyles } from "./styles/GlobalStyles";
import { LIGHT_MODE, DARK_MODE } from "./styles/themes/themes";

const App = () => {
  const [theme, setTheme] = useState(LIGHT_MODE);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme.id === "light" ? DARK_MODE : LIGHT_MODE;
    setTheme(currentTheme);
    localStorage.setItem("current-theme", JSON.stringify(currentTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        <Navigation toggleThemeHandler={toggleTheme} />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
