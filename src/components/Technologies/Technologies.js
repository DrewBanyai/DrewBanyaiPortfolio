import React from 'react';
import { IconContext } from "react-icons";
import { CgWebsite } from 'react-icons/cg';
import { CgServer } from 'react-icons/cg';
import { FiMonitor } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in software development. From AAA to indie gaming, from full-stack web development to military embedded software. I can bring a wealth of knowledge and experience to your team.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <IconContext.Provider value={{ color: "white" }}>
            <CgWebsite size="3rem" stroke="white" />
          </IconContext.Provider>
        </picture>
        <ListContainer>
          <ListTitle>Web Front-End</ListTitle>
          <ListParagraph>
            Experience with Javascript ES6<br /> as well as Next.js, and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <CgServer size="3rem" stroke="white"/>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with backend servers<br />including REST APIs through both<br />NodeJS and .Net 7, and databases<br />through MongoDB and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiMonitor size="3rem" color="white" />
        </picture>
        <ListContainer>
          <ListTitle>Applications & Gaming</ListTitle>
          <ListParagraph>
            Experience building applications<br />in C, C++, C#, and Objective C<br />for mobile, console, and PC
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
