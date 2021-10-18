import { AiOutlineEye }from "react-icons/ai";
import styled from 'styled-components';

export const Container = styled.div`
  background: #E1E8F3;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 30px;
    font-size: 24px;
    color: #828BA1;
  }
`;

export const InputWrapper = styled.input`
  background-color: transparent;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #828BA2;
  padding: 10px 53px 10px 73px;
`;

export const PasswordIcon = styled(AiOutlineEye)`
  right: 22px;
  left: auto !important;
`;