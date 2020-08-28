import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  margin-top: 12rem;
  margin-bottom: 14rem;

  @media (min-width: 1180px) {
    margin-bottom: 16rem;
  }
`;

const appearFromAbove = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 4rem auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 30rem;

    button {
      width: 100%;
      height: 6.4rem;
      margin-top: 6.4rem;
      background-color: var(--primary);
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
        background-color: var(--dark-primary);
      }
    }

    @media (min-width: 500px) {
      width: 40rem;
    }
  }

  animation: ${appearFromAbove} 1s;
`;

export const FormTitle = styled.h1`
  font-size: 3.6rem;
  color: var(--primary);
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
  justify-content: center;

  a {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--dark-primary);
    transition: opacity 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
