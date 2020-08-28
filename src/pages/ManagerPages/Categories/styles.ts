import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 8rem;

  width: 100%;
  margin-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    max-width: 80vw;
    margin: 11.6rem;
    flex-direction: row;
    align-items: unset;
    justify-content: space-between;
  }
`;

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > button {
    margin-left: auto;
    margin-right: auto;
  }

  > button,
  #addButton {
    margin-bottom: 2.4rem;
    width: 23.47rem;
    height: 5.55rem;
    background-color: var(--primary);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    transition: background-color 0.2s;

    font-size: 2rem;
    font-weight: 500;
    color: var(--background);

    &:hover {
      background-color: var(--dark-primary);
    }
  }

  section {
    width: 100%;
    height: 7.4rem;
    padding-left: 4.8rem;
    padding-right: 4.8rem;
    border-top: 1px solid var(--primary);
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

      svg {
        color: var(--dark1);
        transition: color 0.2s;

        &:hover {
          color: var(--red);
        }
      }
    }

    &:hover {
      background-color: var(--light-primary);
    }
  }

  #addCategory {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 2.4rem;
    }
  }

  @media (min-width: 700px) {
    > button,
    #addButton {
      margin-left: 8rem;
      margin-bottom: 4rem;
      width: 32.4rem;
      height: 5.76rem;

      font-size: 2.4rem;
    }

    #addCategory {
      flex-direction: row;
      margin-left: 8rem;
      margin-bottom: 4rem;

      button {
        margin: 2.48rem 0 0 4rem;
      }
    }

    section {
      height: 7.4rem;
      padding-left: 12.5rem;
      padding-right: 11rem;
    }
  }
`;
