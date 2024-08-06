import AboutOurStory from "../components/AboutOurStory";
import FirstSlider from "../components/FirstSlider";
import Container from "../components/Container";
import Reserve from "../components/Reserve";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Blog from "../components/Blog";

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
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
