import Link from 'next/link';
import React from 'react';
import { VscGithub } from 'react-icons/vsc'
import { AiFillLinkedin } from 'react-icons/ai';
import { SiHackerrank } from "react-icons/si";
import { FaCode as PortfolioIcon } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, NavLinkLi, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1 style={{marginBottom:"10px"}}>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <PortfolioIcon size="3rem" /> <span style={{marginLeft:"10px"}}>Portfolio - Drew Banyai</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{marginTop:"4px"}}>
      <NavLinkLi>
        <Link href="#menu">
          <NavLink>Projects</NavLink>
        </Link>
      </NavLinkLi>
      <NavLinkLi>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </NavLinkLi>        
      <NavLinkLi>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </NavLinkLi>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/DrewBanyai">
          <VscGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/drewbanyai/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.hackerrank.com/profile/drewbanyai">
          <SiHackerrank size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
