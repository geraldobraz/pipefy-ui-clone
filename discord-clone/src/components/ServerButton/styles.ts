import { IServerButtonProps } from './index';
import styled from "styled-components";

export const Button = styled.button<IServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  cursor: pointer;
  position: relative;

  border-radius: 50%;

  background-color: ${
  props => props.isHome ? 
    'var(--rocketseat)' : 
    'var(--primary)'
  };

  > img {
    height: 24px;
    width: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;
    content: '';

    display: ${props => props.hasNotifications ? 'inline' : 'none'};
  }
  
  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;
    position: absolute;
    padding: 0 4px;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    content: '${props => props.mentions}';
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;

    font-weight: bold;
    color: var(--white);
    display: ${props => (props.mentions && props.mentions > 0) ? 'inline' : 'none'};
  }
  
  transition: border-radius .2s, background-color .2s;

  &.active, 
  &:hover {
    border-radius: 16px;
    background-color: ${props => 
    props.isHome ? 'var(--rocketseat)' : 'var(--discord)' };
  }
`;