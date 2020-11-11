import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import { ThemeName } from '../../styles/themes';

import {
  Container,
  SmallProfile,
  ChangeLanguageIcon,
  ChangeLanguage,
  Moon,
  Sun,
  ReadingProgress,
  ReadingProgressBar,
} from './styles';

interface IProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<IProps> = ({ themeName, setThemeName }) => {
  const toggleTheme = (): void => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };
  const [offset, setOffset] = useState<number>(0);
  useEffect((): void => {
    window.onscroll = () => setOffset(window.pageYOffset)
  }, []);
  const calcBar = useCallback((): string => {
    const height = document.body?.clientHeight - window.innerHeight;
    if (height) {
      const percent = Math.floor(offset * 100 / height);
      return `${percent}%`;
    }
    return '0px';
  }, [offset]);
  return (
    <Container>
      <SmallProfile />
      <ChangeLanguage>
        <ChangeLanguageIcon />
        <p>Read this in Portuguese</p>
      </ChangeLanguage>
      {themeName === 'light'
        ? (<Moon onClick={toggleTheme} />)
        : (<Sun onClick={toggleTheme} />)}
      <ReadingProgress>
        <ReadingProgressBar value={calcBar()} />
      </ReadingProgress>
    </Container>
  );
}

export default Header;
