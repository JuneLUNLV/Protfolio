// import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {SiDiscord} from 'react-icons/si'
import { Link } from "react-scroll";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >June Liang</span>
        </a>
    </Div1>
    <Div2> 
      <li>
        <Link activeClass="active" smooth spy={true} to="hello" duration={0} style={{"fontSize":"2rem","lineHeight":"32px","color":"rgba(255, 255, 255, 0.75)","transition":"all 0.4s ease 0s",cursor:"pointer"}}>
          Hello
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy={true} to="projects" duration={-400} style={{"fontSize":"2rem","lineHeight":"32px","color":"rgba(255, 255, 255, 0.75)","transition":"all 0.4s ease 0s",cursor:"pointer"}}>
          Projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy={true} to="skills" offset={-200}  duration={0} style={{"fontSize":"2rem","lineHeight":"32px","color":"rgba(255, 255, 255, 0.75)","transition":"all 0.4s ease 0s",cursor:"pointer"}}>
          Skills
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy={true} to="about" offset={-400}  duration={0} style={{"fontSize":"2rem","lineHeight":"32px","color":"rgba(255, 255, 255, 0.75)","transition":"all 0.4s ease 0s",cursor:"pointer"}}>
          About
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
