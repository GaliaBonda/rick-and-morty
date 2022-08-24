import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(Link).attrs((props: { border: string }) => ({
  border: props.border,
}))`
  flex: 0 1 45%;
  color: white;
  padding: 1em;
  display: flex;
  flex-direction: column;
  row-gap: 3em;
  align-items: center;
  border-bottom: ${(props) => props.border};
  &:hover {
    transform: scale(1.06);
  }
  &:active,
  &:focus {
    box-shadow: none;
    border-bottom: ${(props) => props.border};
  }
`;
const StyledHeading = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
const StyledImage = styled.img`
  border-radius: 20px;
  width: 90%;
  flex: 0 1 90%;
`;

interface Props {
  link: string;
  title: string;
  image: string;
  hiddenImage: boolean;
  handleClick: () => void;
  activeTab: boolean;
}

function LinkView({
  link,
  title,
  image,
  hiddenImage,
  handleClick,
  activeTab,
}: Props) {
  return (
    <StyledLink
      to={link}
      onClick={handleClick}
      border={activeTab ? '2px solid white' : 'none'}
    >
      <StyledHeading>{title}</StyledHeading>
      {!hiddenImage && <StyledImage src={image} />}
    </StyledLink>
  );
}

export default LinkView;
