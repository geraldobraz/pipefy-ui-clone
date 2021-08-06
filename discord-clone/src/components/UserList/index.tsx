import React from 'react'
import { Container, Role, User, Avatar } from './styles'

interface IUserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<IUserProps> = ({
  nickname,
  isBot = false
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Online - 1</Role>
      <UserRow nickname="Geraldo Braz" />
      
      <Role>Offline - 18</Role>
      <UserRow nickname="Potatofarmer" isBot />
      <UserRow nickname="Sparrow Bryse"  />
      <UserRow nickname="Flitterwisp Markk" isBot />
      <UserRow nickname="Silvermist DJ Ice"  />
      <UserRow nickname="Spiderfire Hoggrazer"  />
      <UserRow nickname="Beetleglow Soffeea"  />
      <UserRow nickname="Bone Snowgaze" isBot />
      <UserRow nickname="Suzie-Lu" isBot />
      <UserRow nickname="Money Ashlynne"  />
      <UserRow nickname="Loki Ice Ice"  />
      <UserRow nickname="Scorponok"  />
      <UserRow nickname="IronWhispyr"  />
      <UserRow nickname="Topaz Loveflight"  />
      <UserRow nickname="Rock Pigpusher"  />
      <UserRow nickname="Stone-Stomp Sweetberry" isBot />
      <UserRow nickname="Snowfluff Hatecurse"  />
      <UserRow nickname="Atomic Grip"  />
      <UserRow nickname="Jim-Boy"  />
      <UserRow nickname="Starmist Fire" isBot />
      <UserRow nickname="Naturedancer"  />
      <UserRow nickname="GIronhide Fearmoon"  />
      <UserRow nickname=" Star Rage"  />
    </Container>
  )
}

export default UserList