import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import { Grid } from './styles'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Grid>
  )
}

export default Layout
