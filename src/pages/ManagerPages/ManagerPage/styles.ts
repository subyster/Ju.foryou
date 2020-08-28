import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 6.4rem auto 4rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 4rem;
    padding: 0 3.2rem;

    font-weight: 500;
    font-size: 3.2rem;
    color: var(--dark-primary);
    text-align: center;
  }

  @media (min-width: 700px) {
    margin-top: 8rem;
  }

  @media (min-width: 1180px) {
    margin-top: 11.6rem;
    flex-direction: row;
    align-items: unset;
    justify-content: space-evenly;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20vh;

  > div + div {
    margin-top: 6.4rem;
  }

  div {
    div:first-child {
      height: 5rem;
      padding: 0 1.6rem;
      border-radius: 2.4rem 2.4rem 0 0;
      background-color: var(--light-primary);
      border-bottom: 0.8px solid var(--primary);

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 3.2rem;
        width: 3.2rem;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 1.6rem;
      }

      span {
        font-size: 2.4rem;
        color: var(--dark-primary);

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  @media (min-width: 700px) {
    > div + div {
      margin-top: 0;
    }

    min-height: 50vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 9.6rem;
    grid-column-gap: 6.4rem;
    justify-content: space-between;
  }

  @media (min-width: 1180px) {
    grid-column-gap: 12rem;
  }
`;
