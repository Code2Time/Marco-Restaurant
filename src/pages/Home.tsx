import AboutOurStory from "../components/AboutOurStory";
import Container from "../components/Container";
import Header from "../components/Header";
import Menu from "../components/Menu";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <AboutOurStory />
      </Container>
      <Menu />
    </>
  );
}

export default Home;
