import styled from 'styled-components';

export const Container = styled.div``;

export const FormTitle = styled.div`
  margin: 14.4rem 3.6rem 0 3.6rem;

  font-family: Pompiere;
  font-size: 4.2rem;
  line-height: 5.6rem;
  color: var(--purple-ju);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FormContent = styled.div`
  margin-top: 7.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const FormColumn = styled.div`
  max-width: 47.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    margin: 0 5rem;
  }
`;

export const FormLine = styled.div`
  margin-bottom: 3.2rem;
  max-width: 47.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    & + div {
      margin-left: 2.5rem;
    }
  }

  #confirm {
    width: 100%;
    height: 6.4rem;
    background-color: var(--purple-ju);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 2.4rem;
    color: var(--background);
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
    }
  }
`;

export const ConfirmForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AcceptTerms = styled.div`
  margin: 0 0 0.8rem 0.8rem;

  display: flex;
  align-items: center;

  input {
    height: 1.6rem;
    width: 1.6rem;
    color: var(--dark-purple-ju);
  }
`;

export const AcceptText = styled.h1`
  margin-left: 0.8rem;
  font-size: 1.4rem;
  color: var(--dark-purple-ju);
`;
