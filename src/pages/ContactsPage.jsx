import React from 'react';
import { Container } from '@mui/material';
import { Contacts } from '../components/ContactsList/ContactsList';
import { FilterField } from '../components/FilterField/FilterField';
import white from '../images/white.jpeg';

export const ContactsPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${white})`,
        backgroundSize: 'cover',
        position: 'fixed',
        top: 80,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,

      }}
    >
      <Container maxWidth="md">
        <FilterField />
        <Contacts />
      </Container>
    </div>
  );
};
