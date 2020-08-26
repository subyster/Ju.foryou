import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 11.6rem;
  margin-bottom: 0;

  display: flex;
  justify-content: space-between;
`;

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    font-family: Pompiere;
    font-size: 3.6rem;
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
    font-family: Pompiere;
    font-size: 4.2rem;
    color: var(--dark1);
  }

  #scroll {
    width: 100%;
    margin-left: 6.4rem;

    h2 {
      font-family: Pompiere;
      font-size: 2.8rem;
      color: var(--dark1);
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 9.6rem;
    grid-column-gap: 12rem;
    justify-content: space-between;
  }
`;

export const CustumerInfo = styled.div`
  width: 100%;
  padding: 1rem 11rem 1rem 8rem;
  border-top: 1px solid var(--purple-ju);
  border-bottom: 1px solid var(--purple-ju);

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
      font-family: Pompiere;
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }

  section {
    margin-top: 1.6rem;

    p {
      display: flex;
      align-items: center;

      color: var(--dark1);

      & + p {
        margin-top: 0.8rem;
      }

      svg {
        margin-right: 0.8rem;
      }
    }
  }
`;
