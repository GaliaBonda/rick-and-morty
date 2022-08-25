import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledNav = styled.nav`
  display: flex;
  column-gap: 4em;
  justify-content: center;
  margin-bottom: 4em;
`;
const StyledLink = styled(Link)`
  display: block;
  color: white;
  font-size: 1.5em;
  &:hover {
    transform: scale(1.1);
  }
  &:active,
  &:focus {
    box-shadow: none;
  }
`;

interface Props {
  links: string[];
  clickHandle?: () => void;
}

function Nav({ links, clickHandle }: Props) {
  return (
    <StyledNav>
      {links.map((item, index) => {
        return (
          <StyledLink to='#' key={index} onClick={clickHandle}>
            {item}
          </StyledLink>
        );
      })}
    </StyledNav>
  );
}

export default Nav;
