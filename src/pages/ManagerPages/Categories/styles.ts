import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 11.6rem;
  margin-bottom: 0;

  display: flex;
`;

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > button,
  #addButton {
    margin-left: 8rem;
    margin-bottom: 4rem;
    width: 32.4rem;
    height: 5.76rem;
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

  section {
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

    button {
      background-color: transparent;
    }

    svg {
      color: var(--dark1);
      transition: color 0.2s;

      &:hover {
        color: var(--red);
      }
    }

    &:hover {
      background-color: var(--light-purple-ju);
    }
  }

  #addCategory {
    display: flex;
    margin-left: 8rem;
    margin-bottom: 4rem;

    button {
      margin: 2.48rem 0 0 4rem;
    }
  }
`;
