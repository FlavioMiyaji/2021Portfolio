import React from 'react';

import {
  Container,
  Line,
  Contacts,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  RocketLogo,
} from './styles';

function Footer() {
  return (
    <Container>
      <Line />
      <p>© 2020 - Flavio Yoshizo Miyaji</p>
      <Contacts>
        <a href="https://github.com/FlavioMiyaji"><GithubLogo /></a>
        <a href="https://www.linkedin.com/in/flavio-yoshizo-miyaji-b2500a199/"><LinkedinLogo /></a>
        <a href="https://www.instagram.com/flaviomiyaji/"><InstagramLogo /></a>
        <a href="https://www.facebook.com/flavio.miyaji.3/"><FacebookLogo /></a>
        <a href="https://app.rocketseat.com.br/me/flavio-miyaji"><RocketLogo /></a >
      </Contacts>
    </Container>
  );
}

export default Footer;
