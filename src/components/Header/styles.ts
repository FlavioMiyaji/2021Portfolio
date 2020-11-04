import styled, { css } from 'styled-components';
import { BsFillChatFill } from 'react-icons/bs';
import { FiMoon, FiSun } from 'react-icons/fi';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--header);
  padding: 11px 16px;
  z-index: 10;
`;

export const SmallProfile = styled.div`
  flex: 1;
`;

const iconCSS = css`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin: 0 8px;
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

export const Moon = styled(FiMoon)`${iconCSS}`;

export const Sun = styled(FiSun)`${iconCSS}`;

export const ReadingProgress = styled.div`
  background: var(--primary);
  width: 100%;
  height: 4px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface IBarProps {
  value: string;
}

export const ReadingProgressBar = styled.span<IBarProps>`
  background: var(--orange);
  width: ${props => props.value};
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;
