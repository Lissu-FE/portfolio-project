import React from "react";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import PageTemplate from "components/common/PageTemplate";
import Profile from "components/content/Profile";
import About from "components/content/About";
import Skill from "components/content/Skill";
import Project from "components/content/Project";
import Contact from "components/content/Contact";

const ListPage = () => {
  return (
    <PageTemplate>
      <Profile />
      <Element name="project">
        <Fade bottom>
          <About />
        </Fade>
      </Element>
      <Element name="skill">
        <Skill />
      </Element>
      <Element name="project">
        <Fade bottom>
          <Project />
        </Fade>
      </Element>
      <Element name="contact">
        <Fade bottom>
          <Contact />
        </Fade>
      </Element>
    </PageTemplate>
  );
};

export default ListPage;
