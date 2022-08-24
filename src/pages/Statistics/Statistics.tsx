import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import LinkView from '../../components/LinkView';
import Nav from '../../components/Nav';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2em;
  margin-top: 6em;
  margin-bottom: 4em;
`;

function Statistics() {
  const links = [{ link: '/', title: '← Back to Main' }];
  // const [openTab, setOpenTab] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  return (
    <>
      <Nav links={links} />
      <StyledDiv>
        <LinkView
          link='episodes'
          title='Episodes'
          image='/assets/rm-episodes.webp'
          hiddenImage={activeTab.length > 0}
          handleClick={() =>
            setActiveTab((prevState) =>
              prevState !== 'episodes' ? 'episodes' : ''
            )
          }
          activeTab={activeTab === 'episodes'}
        />
        <LinkView
          link='locations'
          title='Locations'
          image='/assets/rm-locations.webp'
          hiddenImage={activeTab.length > 0}
          handleClick={() =>
            setActiveTab((prevState) =>
              prevState !== 'locations' ? 'locations' : ''
            )
          }
          activeTab={activeTab === 'locations'}
        />
      </StyledDiv>
      {activeTab.length > 0 && <Outlet />}
    </>
  );
}

export default Statistics;
