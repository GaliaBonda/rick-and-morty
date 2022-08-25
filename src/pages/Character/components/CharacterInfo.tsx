import React from 'react';
import styled from 'styled-components/macro';

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2em;
`;
const StyledParagraph = styled.p`
  font-size: 1.5em;
`;
const StyledSpan = styled.span`
  font-weight: 600;
`;

interface Props {
  gender: string;
  species: string;
  status: string;
}

function CharacterInfo({ gender, species, status }: Props) {
  const about = [
    { title: 'Gender:', info: gender },
    { title: 'Species:', info: species },
    { title: 'Status:', info: status },
  ];

  return (
    <StyledInfo>
      {about.map((item, index) => {
        return (
          <StyledParagraph key={index}>
            <StyledSpan>{item.title}</StyledSpan> {item.info}
          </StyledParagraph>
        );
      })}
    </StyledInfo>
  );
}

export default CharacterInfo;
