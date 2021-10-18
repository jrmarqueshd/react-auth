import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 34px;
  margin-bottom: 34px;
  
  &::before {
    background-color: #E1E8F3;
    content: "";
    display: block;
    height: 2px;
    width: 100%;
  }

  &::after {
    content: "ou";
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #828BA2;
    position: absolute;
    background-color: #fff;
    padding: 5px 10px;
  } 
`

export const ButtonSocial = styled.div`
  border: 1px solid #E8EEF4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 15px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 255px;
  margin: 0 auto;
  gap: 10px;

  svg {
    font-size: 24px;
  }
`;

export const ButtonGoogle = styled(ButtonSocial)`
  background: #F2F6FB;
  border: 1px solid #E8EEF4;
  margin-bottom: 16px;
`

export const ButtonFace = styled(ButtonSocial)`
  background-color: #3B5998;
  border-radius: 8px;
  color: #fff;
`