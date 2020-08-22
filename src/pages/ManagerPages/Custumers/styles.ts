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

  h1 {
    font-family: Pompiere;
    font-size: 4.8rem;
    margin-left: 6.4rem;
    margin-bottom: 2.4rem;
    color: var(--dark1);
  }

  div {
    width: 100%;
    height: 7.4rem;
    padding-left: 8rem;
    padding-right: 11rem;
    border-top: 1px solid var(--purple-ju);
    transition: background-color 0.2s;

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

    &:hover {
      background-color: var(--light-purple-ju);
    }
  }
`;
