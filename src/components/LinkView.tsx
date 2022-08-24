import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(Link).attrs(
  (props: { active: boolean; border: string }) => ({
    border: props.border,
    active: props.active,
  })
)`
  flex: 0 1 45%;
  color: ${(props) => (props.active ? 'black' : 'white')};
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  row-gap: 3em;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? 'white' : 'inherit')};
  &:hover {
    transform: scale(1.06);
  }
  &:active,
  &:focus {
    box-shadow: none;
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
      active={activeTab}
    >
      <StyledHeading>{title}</StyledHeading>
      {!hiddenImage && <StyledImage src={image} />}
    </StyledLink>
  );
}

export default LinkView;
