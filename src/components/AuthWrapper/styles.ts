import styled from 'styled-components';

export const Container = styled.div`
  font-family: Roboto;
  font-style: normal;
  padding: 47px 15px 92px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 388px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  h2 {
    display: block;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    color: #262A34;
    max-width: 200px;
    margin-bottom: 16px;
    width: 100%;
  }

  .subtitle {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #828BA2;
    max-width: 144px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    h2, .subtitle {
      max-width: none;
      text-align: center;
    }
  }
`;

export const FormWrapper = styled.div`
  margin-top: 63px;
  width: 100%;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(.separator){
      border-radius: 100%;
      border: 2px solid #828BA1;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #828BA1;
      max-width: 20px;
      width: 100%;
      min-height: 20px;
      height: 100%;
      box-sizing: border-box;
    }


    &.separator{
      color: #E1E8F3;
      font-size: 14px;
    }

    &.-active {
      min-width: 28px;
      min-height: 28px;
      background: #828BA1;
      font-size: 14px;
      color: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`
