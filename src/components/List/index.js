import React from 'react';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';

const List = () => {
  return (
    <Container>
      <header>
        <h2>Tasks</h2>
        <button type="button">
          <MdAdd size={24} />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  )
}

export default List;
