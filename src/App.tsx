import { Container } from "./components/Container";
import { GridBackground } from "./components/GridBackground";
import { Header } from "./layout/Header";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";

const App = () => {
  return (
    <Container>
      <GridBackground />
      <Header />
      <Projects />
      <TechStack />
    </Container>
  );
};

export { App };
