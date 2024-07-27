// import { useState } from "react";

import AboutOurStory from "../components/AboutOurStory";
import Container from "../components/Container";
import Header from "../components/Header";

function Home() {
  console.log(typeof Header);

  return (
    <>
      <Header />
      <Container>
        <AboutOurStory />
      </Container>
    </>
  );
}

export default Home;
