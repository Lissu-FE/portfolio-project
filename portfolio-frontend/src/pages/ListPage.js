import React from 'react';
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import PageTemplate from 'components/common/PageTemplate';
import Profile from 'components/common/Profile';
import Project from 'components/common/Project';
import Contact from 'components/common/Contact';

const ListPage = () => {
    return (
        <PageTemplate>
            <Profile />
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