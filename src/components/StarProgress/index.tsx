import React from 'react';

import {
  Container,
  Star,
  StarHalf,
  StarFill,
} from './styles';

interface IProps {
  value: number;
}

const StarProgress: React.FC<IProps> = ({ value }) => {
  if (value > .9) {
    return (<Container><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></Container>);
  }
  if (value > .8) {
    return (<Container><StarFill /><StarFill /><StarFill /><StarFill /><StarHalf /></Container>);
  }
  if (value > .7) {
    return (<Container><StarFill /><StarFill /><StarFill /><StarFill /><Star /></Container>);
  }
  if (value > .6) {
    return (<Container><StarFill /><StarFill /><StarFill /><StarHalf /><Star /></Container>);
  }
  if (value > .5) {
    return (<Container><StarFill /><StarFill /><StarFill /><Star /><Star /></Container>);
  }
  if (value > .4) {
    return (<Container><StarFill /><StarFill /><StarHalf /><Star /><Star /></Container>);
  }
  if (value > .3) {
    return (<Container><StarFill /><StarFill /><Star /><Star /><Star /></Container>);
  }
  if (value > .2) {
    return (<Container><StarFill /><StarHalf /><Star /><Star /><Star /></Container>);
  }
  if (value > .1) {
    return (<Container><StarHalf /><Star /><Star /><Star /><Star /></Container>);
  }
  return (<Container><Star /><Star /><Star /><Star /><Star /></Container>);
}

export default StarProgress;
