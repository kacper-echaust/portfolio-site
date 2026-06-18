import { Container } from "./components/Container";
import { GridBackground } from "./components/GridBackground";
import { Header } from "./layout/Header";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <Container>
      <GridBackground />
      <Header />
      <Projects />
    </Container>
  );
};

export { App };
