import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faArrowDown,
  faEnvelope,
  faCheck,
  faUser,
  faAddressCard,
  faMessage,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faArrowDown,
  faEnvelope,
  faCheck,
  faUser,
  faAddressCard,
  faMessage,
  faBuilding
);

import './App.css';
import LandingPageComponent from './views/landing/landing';
import NavBar from './components/navbar/navbar';
import CreateReactPortal from './utils/create-portal';
import Modal from './features/modal/modal';
import { selectModalShow, selectModalSize } from './features/modal/modalSlice';

// to get scroll event, ensure overflow is set to scroll or auto\
const Wrap = styled.div``;

function App() {
  const modalShow = useSelector(selectModalShow);
  const modalSize = useSelector(selectModalSize);

  return (
    <Wrap>
      <NavBar></NavBar>

      {modalShow && (
        <CreateReactPortal width={25} wrapperId="react-portal-modal">
          <Modal clickable={true} size={modalSize} />
        </CreateReactPortal>
      )}

      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="*" element={<LandingPageComponent />} />
      </Routes>
    </Wrap>
  );
}

export default App;
