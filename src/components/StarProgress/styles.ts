import styled, { css } from 'styled-components';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

export const Container = styled.div`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const iconCSS = css`
  fill: var(--orange);
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin: 8px 8px 0 0;
`;

export const Star = styled(BsStar)`${iconCSS}`;
export const StarHalf = styled(BsStarHalf)`${iconCSS}`;
export const StarFill = styled(BsStarFill)`${iconCSS}`;
