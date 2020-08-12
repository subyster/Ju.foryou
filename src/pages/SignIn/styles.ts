import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 14.4rem;
  width: 42rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      height: 6.4rem;
      margin-top: 6.4rem;
      background-color: var(--purple-ju);
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 700;
      font-size: 2.4rem;
      color: var(--background);
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--dark-purple-ju);
      }
    }
  }
`;

export const FormTitle = styled.h1`
  font-family: Pompiere;
  font-size: 4.2rem;
  color: var(--purple-ju);
`;

export const InputBlock = styled.div`
  margin-top: 7.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 2.4rem;
  }
`;

export const Actions = styled.div`
  margin-top: 4.2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--dark-purple-ju);
    transition: opacity 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }

    & + a {
      color: var(--dark-purple-ju);
      font-weight: 400;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
