import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 11.6rem;
  margin-bottom: 0;

  /* margin-top: 11.6rem;
  margin-left: 12.2rem;
  max-width: 120.6rem; */

  display: flex;
`;

export const SideMenu = styled.div`
  display: flex;

  ::after {
    content: '';
    width: 1.5px;
    height: 80rem;
    border-radius: 0.5px;
    margin-left: 1.4rem;
    background-color: var(--purple-ju);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    button,
    a {
      font-family: Pompiere;
      font-size: 4.2rem;
      line-height: 5rem;
      text-decoration: none;
      color: var(--dark-purple-ju);
      background-color: transparent;
      transition: background-color 0.3s;

      width: 25.6rem;
      height: 6.4rem;
      border-radius: 3.2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--dark-purple-ju);
        color: var(--purple-ju);
      }

      & + button {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    margin-left: 8rem;
    margin-bottom: 4rem;
    width: 32.4rem;
    height: 6rem;
    background-color: var(--purple-ju);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    transition: background-color 0.2s;

    font-size: 2.4rem;
    font-weight: 500;
    color: var(--background);

    &:hover {
      background-color: var(--dark-purple-ju);
    }
  }

  div {
    width: 100%;
    height: 7.4rem;
    padding-left: 12.5rem;
    padding-right: 11rem;
    border-top: 1px solid var(--purple-ju);
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--dark1);
      font-family: Pompiere;
      font-size: 3.2rem;
      line-height: 3.8rem;
    }

    svg {
      color: var(--dark1);
      transition: color 0.2s;
    }

    &:hover {
      background-color: var(--light-purple-ju);

      svg {
        color: var(--red);
      }
    }
  }
`;
