import React, { useEffect, useState } from 'react';

import { ThemeName } from '../../styles/themes';
import useWindowDimensions from '../../hooks/WindowDimensions';

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
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  const { height } = useWindowDimensions();
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    window.onscroll = () => setOffset(window.pageYOffset)
  }, []);
  const calcBar = (): string => {
    try {
      return `${Math.floor(offset * 100 / height)}%`;
    } catch (err) {
      return '0px';
    }
  };
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
