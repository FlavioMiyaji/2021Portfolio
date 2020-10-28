import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.div`
  opacity: 0.9;
  display: flex;
  align-items: center;
  width: min-content;
  padding: 14px 16px;
  border-bottom: 2px solid var(--orange);
  background: var(--primary);
  border-radius: 10px 10px 0 0;
  span {
    font-size: 18px;
    padding: 0 7px;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  opacity: 0.9;
  background: var(--primary);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 0 10px 10px 10px;
  > h1 {
    font-size: 24px;
    margin: 16px 0 8px;
  }
`;
