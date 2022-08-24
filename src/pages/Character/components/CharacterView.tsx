import React from 'react';
import styled from 'styled-components/macro';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6em;
  width: 100%;
  height: 100%;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  background-color: #fff;
  padding: 2em 3em;
  border-radius: 20px;
  flex: 0 1 30%;
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
  const about = [
    { title: 'Gender:', info: gender },
    { title: 'Species:', info: species },
    { title: 'Status:', info: status },
  ];

  return (
    <FlexDiv>
      <StyledDiv>
        <StyledHeading>{name}</StyledHeading>
        <StyledImg src={image} alt=''></StyledImg>
        {about.map((item, index) => {
          return (
            <StyledParagraph key={index}>
              <StyledSpan>{item.title}</StyledSpan> {item.info}
            </StyledParagraph>
          );
        })}
      </StyledDiv>
    </FlexDiv>
  );
}

export default CharacterView;
