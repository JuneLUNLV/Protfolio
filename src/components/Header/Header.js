import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {SiDiscord} from 'react-icons/si'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >June Liang</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <a href="https://blog.vipuljha.com">
          <NavLink>Blog</NavLink>
        </a>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/JuneLUNLV">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/junyan-liang-21561121a/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://discordapp.com/users/263587997750919169/">
        <SiDiscord size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://www.instagram.com/lordarcadius">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/lordarcadius">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
