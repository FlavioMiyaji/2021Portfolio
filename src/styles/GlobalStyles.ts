import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--primary);
  }
  html::-webkit-scrollbar {
    background: var(--primary);
  }
  html::-webkit-scrollbar-thumb {
    background: var(--header);
    border-radius: 3px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
  }
  body {
    min-height: 100%;
    #root {
      min-height: 100vh;
      flex-direction: column;
      display: flex;
    }
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
    transition: color .2s ease-out;
  }
  ul {
    list-style: none;
  }
  :root {
    ${(props) => {
      const theme = props.theme;
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }

  @keyframes goup {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100vh) rotate(960deg);
    }
  }
`;
