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
    margin-bottom: 2.4rem;
    width: 32rem;
    padding: 1.6rem;
    background-color: var(--primary);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: var(--background);
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-primary);
    }

    @media (min-width: 800px) {
      width: 47.5rem;
    }
  }
`;

export const Title = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark1);

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
  }
  span {
    font-size: 1.2rem;
  }

  @media (min-width: 700px) {
    margin-top: 12rem;
  }
`;

export const Content = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: unset;
  }

  @media (min-width: 1180px) {
    align-items: center;
  }
`;

export const Inputs = styled.div`
  div {
    margin-bottom: 0.8rem;
    width: 30rem;
  }
`;

export const Photos = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  div + div {
    margin-top: 4rem;
  }

  @media (min-width: 800px) {
    margin-top: 0;
    margin-left: 6.4rem;
  }

  @media (min-width: 1180px) {
    margin-left: 9.2rem;

    flex-direction: row;
  }
`;
