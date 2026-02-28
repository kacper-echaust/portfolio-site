import { Container } from "./components/Container";
import { GridBackground } from "./components/GridBackground";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Container>
        <GridBackground />
      </Container>
      <Container>
        <Header />
      </Container>
    </>
  );
};

export { App };
