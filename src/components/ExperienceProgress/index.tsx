import React from 'react';

import {
  Container,
  Meter,
  Bar,
} from './styles';

interface IProps {
  value: number;
  color: string;
}

const ExperienceProgress: React.FC<IProps> = ({ value, color }) => {
  const partialValue = value >= 10 ? 10 : value;
  const parcentage = (100 * partialValue) / 10;
  return (
    <Container>
      <Meter>
        <Bar width={parcentage} color={color} />
      </Meter>
    </Container>
  );
}

export default ExperienceProgress;
