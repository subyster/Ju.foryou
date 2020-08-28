import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 6.4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    margin-top: 8rem;
  }
`;

export const AboutUs = styled.div`
  background-color: var(--dark1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16rem 3.2rem;

  div {
    max-width: 36rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
      font-size: 4.8rem;
      font-weight: 500;
      color: var(--light-primary);
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    p {
      margin-top: 2.4rem;
      font-style: italic;
      font-weight: 300;
      font-size: 2rem;
      line-height: 1.9rem;
      display: flex;
      align-items: center;
      text-align: left;

      color: var(--dark-primary);
    }
  }

  @media (min-width: 700px) {
    div {
      max-width: 48rem;

      h2 {
        font-size: 5.6rem;
      }

      p {
        text-align: center;
      }
    }
  }

  @media (min-width: 700px) {
    div {
      max-width: 70rem;

      h2 {
        font-size: 7.2rem;
      }

      p {
        font-size: 2.8rem;
        line-height: 3.2rem;
      }
    }
  }
`;

export const ToSignUp = styled.div`
  padding: 16rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    max-width: 42rem;
    margin-bottom: 4rem;
    font-size: 4.8rem;
    line-height: 7.2rem;
    display: flex;
    align-items: center;
    text-align: center;

    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--primary);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    width: 24rem;
    height: 6.4rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
    color: var(--background);

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-primary);
    }
  }

  @media (min-width: 1180px) {
    flex-direction: row;

    h1 {
      max-width: 56rem;
      font-size: 6.4rem;
      line-height: 7.2rem;
      margin-bottom: unset;
    }

    a {
      width: 30rem;
      height: 7.2rem;
      font-size: 2.2rem;
      margin-left: 4.8rem;
    }
  }
`;
