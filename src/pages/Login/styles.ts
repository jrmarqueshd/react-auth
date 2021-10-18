import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Form = styled.form`
  width: 100%;

  & > .input-wrapper {
    margin-bottom: 8px;
  }
`;

export const RecoveryLink = styled(Link)`
  display: block;
  text-align: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #828BA2;
  margin-top: 20px;
  margin-bottom: 65px;
`

export const ChangeAuthMode = styled.div`
  text-align: center;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #828BA2;
  margin-top: 32px;

  a {
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
`;
