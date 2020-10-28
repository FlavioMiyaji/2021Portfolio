import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 8px 8px 0 0;
  width: 100%;
  @media (min-width: 768px) {
    width: unset;
  }
`;

export const Meter = styled.div`
	height: 32px;
	position: relative;
	background: #555;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	padding: 8px;
	box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
`;

interface IBar {
  width: number;
  color: string;
}

export const Bar = styled.span<IBar>`
  --color: ${props => props.color};
  width: ${props => props.width}%;
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: var(--color);
  background-image: linear-gradient(
    center bottom,
    var(--color) 37%,
    var(--color) 69%
  );
  box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
`;
