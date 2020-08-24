import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #submitButton {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 4rem;
    width: 32rem;
    padding: 1.6rem;
    background-color: var(--purple-ju);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: var(--background);
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
    }

    @media (min-width: 800px) {
      width: 47.5rem;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--dark1);

  h1 {
    font-family: Pompiere;
    font-size: 3.6rem;
    margin-bottom: 1.6rem;
  }
  span {
    display: flex;
    align-items: center;
    font-family: Pompiere;
    font-size: 2rem;

    img {
      height: 2.8rem;
      width: 2.8rem;
      border-radius: 50%;
      margin: 0 1.6rem;
    }
  }

  button {
    margin-top: 1.6rem;
    padding: 0.8rem 1.6rem;
    border-radius: 1.6rem;
    background-color: transparent;
    font-size: 2rem;
    font-weight: 500;
    color: var(--dark1);
    transition: color 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }

    &:hover {
      color: var(--red);
      background-color: var(--light-purple-ju);
    }
  }

  @media (min-width: 800px) {
    padding: 0 12rem;
    justify-content: space-between;
    flex-direction: row;

    h1 {
      margin-bottom: 0;
    }

    button {
      margin-top: 0;
    }
  }

  @media (min-width: 1100px) {
    padding: 0 20rem;
  }
`;

export const Content = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: unset;
  }
`;

export const Inputs = styled.div`
  & + div {
    margin-top: 1.6rem;
  }

  div + div {
    margin-top: 1.6rem;
    width: 30rem;
  }

  @media (min-width: 800px) {
    margin-right: 6.4rem;

    & + div {
      margin-top: 0;
    }
  }

  @media (min-width: 1100px) {
    margin-right: 8.4rem;
  }
`;

export const Photos = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 31.6rem;
    height: 37.8rem;
    background: var(--white);
    box-shadow: 1px 2px 4px var(--purple-ju);
    border-radius: 2.4rem;
    object-fit: cover;
  }

  @media (min-width: 1100px) {
    margin-top: 0;
  }
`;
