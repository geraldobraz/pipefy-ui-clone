import React from 'react'
import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat" />
      <ChannelButton channelName="work" />
      <ChannelButton channelName="lol" />
      <ChannelButton channelName="cs-go" />
      <ChannelButton channelName="overwatch" />

    </Container>
  )
}

export default ChannelList
