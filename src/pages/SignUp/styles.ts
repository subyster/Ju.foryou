import styled from 'styled-components';

export const Container = styled.div``;

export const FormTitle = styled.div`
  margin-top: 144px;

  font-family: Pompiere;
  font-size: 42px;
  color: var(--purple-ju);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FormContent = styled.div`
  margin-top: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormColumn = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLine = styled.div`
  margin-bottom: 32px;
  width: 475px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  #confirm {
    width: 100%;
    height: 64px;
    background-color: var(--purple-ju);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 24px;
    color: var(--background);
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
    }
  }
`;

export const SmallSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 75px;

  h1 {
    margin: 0 0 8px 8px;
    font-size: 14px;
    color: var(--dark-purple-ju);
  }

  select {
    height: 64px;
    width: 100%;
    padding: 0 24px;

    background: var(--white);
    box-shadow: 1px 2px 4px var(--purple-ju);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--dark1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const CitySelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;

  h1 {
    margin: 0 0 8px 8px;
    font-size: 14px;
    color: var(--dark-purple-ju);
  }

  select {
    height: 64px;
    width: 100%;
    padding: 0 24px;

    background: var(--white);
    box-shadow: 1px 2px 4px var(--purple-ju);
    border-radius: 8px;
    display: flex;
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const ConfirmForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AcceptTerms = styled.div`
  margin: 0 0 8px 8px;

  display: flex;
  align-items: center;

  input {
    height: 16px;
    width: 16px;
    color: var(--dark-purple-ju);
  }
`;

export const AcceptText = styled.h1`
  margin-left: 8px;
  font-size: 14px;
  color: var(--dark-purple-ju);
`;
