import AboutOurStory from "../components/AboutOurStory";
import SecondHeader from "../components/SecondHeader";
import Container from "../components/Container";
import Services from "../components/Services";

function About() {
  return (
    <>
      <SecondHeader />
      <Container>
        <AboutOurStory />
      </Container>
      <Services />
    </>
  );
}

export default About;
