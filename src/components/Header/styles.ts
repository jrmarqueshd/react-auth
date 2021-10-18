import styled from "styled-components";

export const Container = styled.header`
  background-color: #1A1B20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px;
  color: #828BA1;
  font-size: 24px;
  
  @media screen and (min-width: 1140px) {
    padding: 17px 40px;
  }

  @media screen and (min-width: 1140px) {
    padding: 17px 60px;
  }
`;

export const Logo = styled.div`
  background: #313641;
  border-radius: 8px;
  padding: 5px;
  min-width: 155px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  color: #828BA1;
  text-align: center;
`;

const FlexibleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const MenuContainer = styled(FlexibleContainer)`
  @media screen and (min-width: 768px) {
    .button-menu{
      display: none;
    }
  }
`;

export const IconsContainer = styled(FlexibleContainer)`
  .auth-navs{
    span {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 30px;

    .auth-navs{
      display: flex;
      align-items: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #828BA2; 
      gap: 28px;
      
      span {
        display: inline;
      }

      svg {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1140px) {
    gap: 224px;
  }

`;

export const SearchWrapper = styled.div`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262A34;
    border-radius: 8px;
    width: 300px;
    padding: 5px 18px;
  }

  @media screen and (min-width: 1140px) {
    width: 422px;
  }
`;

export const Input = styled.input`
  display: none;
  background-color: transparent;
  border: none;
  border-right: 1px solid #4A505C;
  padding-right: 15px;
  margin-right: 15px;
  width: 100%;

  &::placeholder {
    color: #828BA1;
    font-size: 14px;
    line-height: 16px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;