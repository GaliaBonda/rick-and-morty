import React from 'react';
import styled from 'styled-components/macro';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6em);
  width: 100%;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  background-color: #fff;
  padding: 1em 3em;
  border-radius: 20px;
`;
const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 1.5em;
  text-transform: uppercase;
`;
const StyledImg = styled.img`
  border-radius: 20px;
  margin-bottom: 2em;
`;
const StyledParagraph = styled.p`
  font-size: 1.5em;
`;
const StyledSpan = styled.span`
  font-weight: 600;
`;

function CharacterView({
  name,
  image,
  gender,
  species,
  status,
}: ICharacterApi) {
  return (
    <FlexDiv>
      <StyledDiv>
        <StyledHeading>{name}</StyledHeading>
        <StyledImg src={image} alt=''></StyledImg>
        <StyledParagraph>
          <StyledSpan>Gender:</StyledSpan> {gender}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>Species:</StyledSpan> {species}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>Status:</StyledSpan> {status}
        </StyledParagraph>
      </StyledDiv>
    </FlexDiv>
  );
}

export default CharacterView;
