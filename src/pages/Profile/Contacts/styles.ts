import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    width: 30px;
    height: 30px;
    color: #fff;
    background-color: #ccc;
    text-decoration: none;
    margin: 8px 32px;
    transform: rotate(-30deg) skew(25deg);
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    opacity: 0; /* Sem essa classe não aparece os ícones */
    transition: 0.5s;
    position: absolute;
    top: 0;
    left: 0;
  }

  svg {
    width: 100%;
    height: 100%;
    font-size: 28px;
    border-radius: 4px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  a:nth-child(1) svg, a:nth-child(1) span {
    background: #3b5999;
  }

  a:nth-child(2) svg, a:nth-child(2) span {
    background: #55acee;
  }

  a:nth-child(3) svg, a:nth-child(3) span {
    background: #dd4b39;
  }

  a:nth-child(4) svg, a:nth-child(4) span {
    background: #0077b5;
  }

  a:nth-child(5) svg, a:nth-child(5) span {
    background: #e4405f;
  }

/* Animação */
  a:hover i {
    transform: translate(-20px, 20px);
    opacity: 0.2;
  }

  a:hover span:nth-child(4) {
    transform: translate(-15px, 15px);
    opacity: 0.4;
  }

  a:hover span:nth-child(3) {
    transform: translate(-10px, 10px);
    opacity: 0.6;
  }

  a:hover span:nth-child(2) {
    transform: translate(-5px, 5px);
    opacity: 0.8;
  }

  a:hover span:nth-child(1) {
    transform: translate(0,0);
  }
`;
