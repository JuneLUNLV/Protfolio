import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://t.me/lordarcadius">Telegram</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:juneyanliang@gmail.com">
            juneyanliang@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2022 <Link href="#">  June Liang</Link> . All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/JuneLUNLV">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://www.linkedin.com/in/lordarcadius/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/lordarcadius">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/lordarcadius">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
