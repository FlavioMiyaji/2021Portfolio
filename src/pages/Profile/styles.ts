import styled from 'styled-components';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  margin-top: 60px;
  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
  flex: 1;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;
  padding-top: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);
  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Introdution = styled.div`
  /* padding-bottom: 24px; */
`;

export const Card = styled.div`
  background-color: var(--primary);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 0 10px 10px 10px;
  > h1 {
    font-size: 24px;
    margin: 16px 0 8px;
  }
`;

export const Tab = styled.div`
  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 14px 16px;
    border-bottom: 2px solid var(--orange);
    background: var(--primary);
    border-radius: 10px 10px 0 0;
    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }
  }

  &.mobile {
    margin-top: var(--verticalPadding);
    .content {
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
    display: none;
    @media (min-width: 768px) {
      display: unset;
      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }
      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`;
