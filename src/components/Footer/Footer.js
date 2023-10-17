import React from 'react';
import { VscGithub } from 'react-icons/vsc'
import { AiFillLinkedin } from 'react-icons/ai';
import { SiHackerrank } from "react-icons/si";

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:610-613-2516">610-613-2516</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:DrewBanyai@gmail.com">
            DrewBanyai@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <SocialIconsContainer>
            <SocialContainer>
              <SocialIcons href="https://github.com/DrewBanyai">
                <VscGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/drewbanyai/">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.hackerrank.com/profile/drewbanyai">
                <SiHackerrank size="3rem" />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
