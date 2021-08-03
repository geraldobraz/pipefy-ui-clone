import React from 'react'
import { 
  Container,
  HashtagIcon,
  InviteIcon,
  SettingsIcon 
} from './styles'

interface IChannelButtonProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<IChannelButtonProps> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />

      </div>
    </Container>
  )
}

export default ChannelButton
