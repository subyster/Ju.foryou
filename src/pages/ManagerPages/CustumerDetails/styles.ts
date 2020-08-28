import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 6.4rem;

  width: 100%;
  margin-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    margin-top: 8rem;
  }

  @media (min-width: 1180px) {
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
  margin-bottom: 2.4rem;

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    font-size: 3.2rem;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
    color: var(--dark1);
    transition: opacity 0.3s;

    svg {
      margin-right: 1.6rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  h1 {
    margin: 1.6rem 6.4rem;
    font-size: 3.6rem;
    font-weight: 500;
    color: var(--dark1);
  }

  #scroll {
    width: 100%;

    h2 {
      font-size: 2.4rem;
      color: var(--dark1);
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    > div + div {
      margin-top: 6.4rem;
    }

    @media (min-width: 700px) {
      > div + div {
        margin-top: 0;
      }
      margin-left: 6.4rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 9.6rem;
      grid-column-gap: 6.4rem;
      justify-content: space-between;
    }

    @media (min-width: 1180px) {
      grid-column-gap: 12rem;
    }
  }
`;

export const CustumerInfo = styled.div`
  width: 100%;
  padding: 1rem 2.4rem 1rem 3.2rem;
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid var(--primary);

  div {
    display: flex;
    align-items: center;

    img {
      height: 5.4rem;
      width: 5.4rem;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 3.2rem;
    }

    span {
      color: var(--dark1);
      font-size: 2.8rem;
      line-height: 3.8rem;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  section {
    margin-top: 1.6rem;

    p {
      display: flex;
      align-items: center;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      color: var(--dark1);

      & + p {
        margin-top: 0.8rem;
      }

      svg {
        margin-right: 0.8rem;
      }
    }
  }

  @media (min-width: 700px) {
    padding: 1rem 11rem 1rem 8rem;

    div {
      img {
        height: 5.4rem;
        width: 5.4rem;
        margin-right: 3.2rem;
      }

      span {
        font-size: 3.2rem;
      }
    }
  }
`;
