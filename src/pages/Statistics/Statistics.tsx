import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('episodes')) {
      setActiveTab('episodes');
    } else if (location.pathname.includes('locations')) {
      setActiveTab('locations');
    } else {
      setActiveTab('');
    }
  }, [location.pathname]);

  return (
    <>
      <Nav links={links} />
      <StyledDiv data-testid='test-statistics'>
        <LinkView
          link='episodes'
          title='Episodes'
          image='/rm-episodes.webp'
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
          image='/rm-locations.webp'
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
