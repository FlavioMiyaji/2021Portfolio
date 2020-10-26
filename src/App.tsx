import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Squares from './components/Squares';
import Profile from './pages/Profile';

import { ThemeName, themes } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  const currentTheme = themes[themeName];
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Squares themeName={themeName} />
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
