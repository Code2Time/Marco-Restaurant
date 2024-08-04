import AboutOurStory from "../components/AboutOurStory";
import Container from "../components/Container";
import FirstSlider from "../components/FirstSlider";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Reserve from "../components/Reserve";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <AboutOurStory />
      </Container>
      <Menu />
      <Reserve />
      <FirstSlider />
    </>
  );
}

export default Home;
