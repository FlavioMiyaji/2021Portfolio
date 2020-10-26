import styled, { css } from 'styled-components';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 32px;
  > p {
    margin: 8px;
  }
`;

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  border-top: 1px solid var(--border);
  margin: 8px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const iconCSS = css`
  width: 40px;
  height: 40px;
  fill: var(--black);
  flex-shrink: 0;
  padding: 8px;
  cursor: pointer;
  &:hover{
    opacity: 0.6;
  }
`;

export const GithubLogo = styled(FaGithub)`${iconCSS}`;
export const LinkedinLogo = styled(FaLinkedin)`${iconCSS}`;
export const InstagramLogo = styled(FaInstagram)`${iconCSS}`;
export const FacebookLogo = styled(FaFacebookSquare)`${iconCSS}`;
export const RocketLogo = styled(IoIosRocket)`${iconCSS}`;
