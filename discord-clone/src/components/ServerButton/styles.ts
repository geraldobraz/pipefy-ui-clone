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
    
  }
  
  &::after {

  }
`;