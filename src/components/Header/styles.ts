import styled, { css } from 'styled-components';
import { BsFillChatFill, BsMoon, BsSun } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--header);
  padding: 11px 16px;
`;

export const SmallProfile = styled.div`
  flex: 1;
`;

const iconCSS = css`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`;

export const ChangeLanguageIcon = styled(BsFillChatFill)` ${iconCSS}`;
export const ChangeLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  > p {
    display: none;
    margin-left: 8px;
    color: var(--logo);
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const Moon = styled(BsMoon)`
  ${iconCSS}
`;

export const Sun = styled(BsSun)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`;
