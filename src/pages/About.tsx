import AboutOurStory from "../components/AboutOurStory";
import SecondHeader from "../components/SecondHeader";
import FirstSlider from "../components/FirstSlider";
import Container from "../components/Container";
import Services from "../components/Services";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <SecondHeader />
      <Container>
        <AboutOurStory />
      </Container>
      <Services />
      <FirstSlider />
      <Footer />
    </>
  );
}

export default About;
