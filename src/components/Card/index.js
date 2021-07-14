import React from 'react';
import { Container,Label } from './styles';

const Card = () => {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img src="https://avatars.dicebear.com/api/male/avatar-1.svg" alt="avatar" />
    </Container>
  )
}

export default Card;
