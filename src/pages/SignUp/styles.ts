import styled from 'styled-components';

export const Container = styled.div`
  #signup-form {
    margin: 8rem auto;

    @media (min-width: 500px) {
      margin: 14.4rem auto;
    }
  }
`;

export const FormTitle = styled.div`
  padding: 0 3.2rem;

  font-size: 3.2rem;
  line-height: 5.6rem;
  color: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FormContent = styled.div`
  margin-top: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    margin-top: 7.2rem;
  }

  @media (min-width: 1180px) {
    flex-direction: row;
  }
`;

export const FormColumn = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + div {
    margin-top: 2.4rem;
  }

  @media (min-width: 500px) {
    & + div {
      margin-top: 3.2rem;
    }

    width: 47.5rem;
  }

  @media (min-width: 1180px) {
    & + div {
      margin-top: 0;
    }

    margin: 0 5rem;
  }
`;

export const FormLine = styled.div`
  & + div {
    margin-top: 2.4rem;
  }

  div {
    max-width: 30rem;

    & + div {
      margin-top: 2.4rem;
    }
  }

  max-width: 47.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  #confirm {
    width: 30rem;
    height: 6.4rem;
    background-color: var(--primary);
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
      background-color: var(--dark-primary);
    }
  }

  @media (min-width: 500px) {
    & + div {
      margin-top: 3.2rem;
    }

    max-width: 47.5rem;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      max-width: unset;

      & + div {
        margin-left: 2.5rem;
        margin-top: unset;
      }
    }

    #confirm {
      width: 100%;
      height: 6.4rem;
      font-size: 2.4rem;
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
    color: var(--dark-primary);
  }
`;

export const AcceptText = styled.h1`
  margin-left: 0.8rem;
  font-size: 1.4rem;
  color: var(--dark-primary);
`;
