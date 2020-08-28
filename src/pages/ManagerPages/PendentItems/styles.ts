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
  display: flex;
  flex-direction: column;
  align-items: center;

  > div + div {
    margin-top: 6.4rem;
  }

  div {
    div:first-child {
      height: 5rem;
      border-radius: 2.4rem 2.4rem 0 0;
      background-color: var(--light-primary);
      border-bottom: 0.8px solid var(--primary);

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 50%;
        margin-right: 1.6rem;
      }

      span {
        font-family: Pompiere;
        font-size: 28px;
        color: var(--dark-primary);
      }
    }
  }

  @media (min-width: 700px) {
    > div + div {
      margin-top: 0;
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 9.6rem;
    grid-column-gap: 6.4rem;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    grid-column-gap: 12rem;
  }
`;
