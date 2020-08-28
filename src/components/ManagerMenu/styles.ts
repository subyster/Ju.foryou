import styled, { keyframes } from 'styled-components';

const appearFromAbove = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;

    button {
      display: flex;
      align-items: center;
      width: 100vw;
      background-color: var(--background);
      z-index: 3;

      padding: 1.6rem 2.4rem;
      color: var(--dark1);

      svg {
        width: 3.2rem;
        height: 3.2rem;

        margin-right: 1.6rem;
      }

      span {
        font-weight: 500;
        font-size: 2.4rem;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2.4rem;
      z-index: 2;

      animation: ${appearFromAbove} 1s;

      a {
        font-family: Pompiere;
        font-size: 3.6rem;
        text-decoration: none;
        color: var(--dark-primary);
        background-color: transparent;
        transition: background-color 0.3s;

        width: 25.6rem;
        height: 4.8rem;
        border-radius: 2.4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: var(--dark-primary);
          color: var(--primary);
        }

        & + a {
          margin-top: 1.6rem;
        }
      }
    }
  }

  ul {
    display: none;
  }

  @media (min-width: 1100px) {
    > div {
      display: none;
    }

    ::after {
      content: '';
      width: 1.5px;
      height: 80rem;
      border-radius: 0.5px;
      margin-left: 1.4rem;
      background-color: var(--primary);
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        font-family: Pompiere;
        font-size: 4.2rem;
        line-height: 5rem;
        text-decoration: none;
        color: var(--dark-primary);
        background-color: transparent;
        transition: background-color 0.3s;

        width: 25.6rem;
        height: 6.4rem;
        border-radius: 3.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: var(--dark-primary);
          color: var(--primary);
        }

        & + a {
          margin-top: 1.6rem;
        }
      }
    }
  }
`;
