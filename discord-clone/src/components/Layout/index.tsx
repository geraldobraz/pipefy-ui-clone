import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import { Grid } from './styles'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <div />
      <UserList />
    </Grid>
  )
}

export default Layout
