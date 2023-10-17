import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This page serves as the portfolio of Drew Banyai, Principal Software Engineer, software developer since 2009.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;