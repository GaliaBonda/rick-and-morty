import React from 'react';
import styled from 'styled-components/macro';
import ICharacter from '../../../common/interfaces/ICharacter';

const StyledLi = styled.li`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #fff;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  max-width: 25em;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const StyledParagraph = styled.p`
  text-transform: uppercase;
  font-size: 1.5em;
  text-align: center;
`;
const StyledImg = styled.img`
  border-radius: 20px;
`;

function Character({
  image,
  name,
  clickHandler,
}: ICharacter & { clickHandler: () => void }) {
  return (
    <StyledLi onClick={clickHandler}>
      <StyledParagraph>{name}</StyledParagraph>
      <StyledImg src={image} />
    </StyledLi>
  );
}

export default Character;
