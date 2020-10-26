import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: -1;
`;

interface ISquareProps {
  size: number;
  position: number;
  delay: number;
  duration: number;
  timing: string;
  background: string;
}

export const Square = styled.li<ISquareProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  bottom: -${props => props.size}px;
  left: ${props => props.position}%;
  background-color:  ${props => props.background};
  display: block;
  position: absolute;
  border-radius: 10%;
  animation: goup 2s infinite alternate;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
  animation-timing-function: ${props => props.timing};
`;