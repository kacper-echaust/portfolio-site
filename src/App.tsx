import { Container } from "./components/Container";
import { GridBackground } from "./components/GridBackground";
import { Header } from "./layout/Header";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { AboutMe } from "./components/AboutMe";
import { Navigation } from "./layout/Navigation";
import { MobileNavigation } from "./layout/MobileNavigation";

const App = () => {
  return (
    <Container>
      <GridBackground />
      <Navigation />
      <MobileNavigation />
      <Header />
      <AboutMe />
      <Projects />
      <TechStack />
    </Container>
  );
};

export { App };
