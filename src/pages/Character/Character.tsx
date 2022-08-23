import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import CharacterView from './components/CharacterView';

import { sagaActions } from '../../store/sagas';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';

const StyledDiv = styled.div``;

function Character() {
  const characterId = useParams().characterId;
  const { name, status, species, gender, image, id } = useSelector(
    (state: RootState) => state.character
  );
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: sagaActions.GET_CHARACTER_SAGA, payload: characterId });
  }, []);

  return (
    <StyledDiv>
      <CharacterView
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        image={image}
      ></CharacterView>
    </StyledDiv>
  );
}

export default Character;
