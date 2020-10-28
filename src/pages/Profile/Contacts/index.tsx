import React from 'react';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

import Section from '../../../components/Section'

import { Container } from './styles';

const Contacts: React.FC = () => {
  return (
    <Section title="Contacts">
      <Container>
        <a href="https://github.com/FlavioMiyaji">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaGithub />
        </a>
        <a href="https://app.rocketseat.com.br/me/flavio-miyaji">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <IoIosRocket />
        </a >
        <a href="https://www.facebook.com/flavio.miyaji.3/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaFacebookSquare />
        </a>
        <a href="https://www.linkedin.com/in/flavio-yoshizo-miyaji-b2500a199">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/flaviomiyaji/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaInstagram />
        </a>
      </Container>
    </Section>
  );
}

export default Contacts;
