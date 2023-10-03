import React from 'react';
import { AddContact } from 'components/AddContact/AddContact';
import white from '../images/white.jpeg';

export const AddTaskPage = () => {
  return  <div
  style={{
    backgroundImage: `url(${white})`,
    backgroundSize: 'cover',
    position: 'fixed',
    top: 100,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    
  }}
> <AddContact /></div>;
};
