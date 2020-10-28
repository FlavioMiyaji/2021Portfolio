import styled from 'styled-components';

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 16px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    span + span {
      flex: 1;
      font-weight: bold;
    }
  }
`;

export const Title = styled.span`
  font-weight: 700;
  @media (min-width: 768px) {
    width: 25%;
  }
`;