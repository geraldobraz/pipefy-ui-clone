import React from 'react';
import { Button } from './styles';
import Logo from '../../assets/Logo.svg'

export interface IServerButtonProps {
  selected?: boolean;
  hasNotifications?: boolean;
  isHome?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<IServerButtonProps> = ({ 
  hasNotifications = false,
  isHome = false,
  selected = false,
  mentions,
}) => {
  return (
    <Button
      hasNotifications={hasNotifications}
      isHome={isHome}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && (
        <img src={Logo} alt="Logo" />
      )}
    </Button>
  )
}

export default ServerButton
