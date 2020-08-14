import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4.8rem;
  background-color: var(--pink-ju);
  width: calc(100vw - 1.8rem);
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.4rem;

  @media (min-width: 700px) {
    padding: 2.4rem 6rem;
  }

  @media (min-width: 1100px) {
    padding: 2.4rem 12rem;
    flex-direction: row;
  }
`;

export const FooterText = styled.div`
  font-family: Pompiere;
  font-size: 32px;
  color: var(--dark-purple-ju);
`;

export const Social = styled.div`
  height: 100%;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div,
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    p {
      font-family: Pompiere;
      font-size: 3.2rem;
      color: var(--dark-purple-ju);
      margin-left: 3rem;
    }
  }

  a {
    margin-top: 2.4rem;
  }

  a:hover {
    opacity: 0.8;
  }

  @media (min-width: 1100px) {
    margin-top: 0;
  }
`;
