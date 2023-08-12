import React from "react";
import Header from "./Header";
import HeroImage from "./HeroImage";
import Content from "./Content";

const App = () => {
  return (
    <section className="container">
        <Header />
        <HeroImage />
        <Content />
    </section>
  );
};

export default App;
