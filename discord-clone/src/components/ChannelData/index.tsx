import React, { useEffect, useRef } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage';
import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon 
} from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
          key={n}
          author="Geraldo Braz"
          date="26/03/2021"
          content="Today is my bday! 🎉🎈"
          />
        ))}

      <ChannelMessage
        author="John Doe"
        date="26/03/2021"
        content={
        <>
          <Mention>@geraldobraz</Mention>, let's play D&D? ⚔🏹
        </>
        }
        hasMention
        isBot
      />
      </Messages>

      <InputWrapper>
        <InputIcon />
        <Input type="text" placeholder="Chat on #open-chat" />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData