import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 32px;
  background-color: #00C1A5;
  border-radius: 8px;
  color: #FFFFFF;
  border: none;
  transition: all 0.3ms ease-in-out;
  width: 100%;

  &:hover{
    opacity: 0.7;
  }
`;