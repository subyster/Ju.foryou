import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark1);

  h1 {
    font-family: Pompiere;
    font-size: 3.6rem;
  }
  span {
    font-size: 1.2rem;
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

  @media (min-width: 1100px) {
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

  @media (min-width: 1100px) {
    margin-left: 9.2rem;

    flex-direction: row;
  }
`;

export const AddPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31.6rem;
  height: 37.8rem;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 2.4rem;

  div {
    border: 2px dashed var(--dark-purple-ju);
    height: 30.24rem;
    width: 25.28rem;
    border-radius: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    span {
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: var(--dark1);
      margin: 2.4rem;
    }
  }
`;

export const MorePhotos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8rem;
  height: 9.6rem;
  background: var(--white);
  box-shadow: 1px 2px 4px var(--purple-ju);
  border-radius: 2.4rem;

  div {
    border: 2px dashed var(--dark-purple-ju);
    border-radius: 2.4rem;
    width: 6rem;
    height: 7.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 3.2rem;
      color: var(--dark1);
    }
  }

  @media (min-width: 1100px) {
    margin-left: 5.6rem;
  }
`;

export const Submit = styled.button`
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
`;
