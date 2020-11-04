import React from 'react';

import { ThemeName } from '../../styles/themes';

import { Container, Square } from './styles';

interface ISquare {
  size: number;
  position: number;
  delay: number;
  duration: number;
  timing: string;
  background: string;
}

interface IProps {
  themeName: ThemeName;
}

const Squares: React.FC<IProps> = ({ themeName }) => {
  const random = (min: number, max: number) => (Math.random() * (max - min) + min);

  const squares: ISquare[] = [];
  for (let i = 0; i < 20; i++) {
    squares.push({
      size: Math.floor(random(10, 120)),
      position: random(1, 99),
      delay: random(5, 0.1),
      duration: random(24, 12),
      timing: `cubic-bezier(${random(0, 1)}, ${random(0, 1)}, ${random(0, 1)}, ${random(0, 1)})`,
      background: themeName === 'light' ? 'rgba(0, 0, 0, .15)' : 'rgba(255, 255, 255, .15)',
    });
  }

  return (
    <Container>
      {squares.map((square, index) => (
        <Square
          key={index}
          size={square.size}
          position={square.position}
          delay={square.delay}
          duration={square.duration}
          timing={square.timing}
          background={square.background}
        />
      ))}
    </Container>
  );
}

export default Squares;
