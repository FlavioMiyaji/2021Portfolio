import React from 'react';

import { ThemeName } from '../../styles/themes';

import {
  Container,
  SmallProfile,
  ChangeLanguageIcon,
  ChangeLanguage,
  Moon,
  Sun,
} from './styles';

interface IProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<IProps> = ({ themeName, setThemeName }) => {
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
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
    </Container>
  );
}

export default Header;
