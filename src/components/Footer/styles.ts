import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--secondary);
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.4rem;

  @media (min-width: 700px) {
    padding: 2.4rem 6rem;
  }

  @media (min-width: 1180px) {
    padding: 2.4rem 8rem;
    flex-direction: row;
  }
`;

export const FooterText = styled.div`
  font-size: 24px;
  text-align: center;
  color: var(--dark-primary);

  @media (min-width: 1180px) {
    text-align: unset;
  }
`;

export const Social = styled.div`
  height: 100%;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--dark-primary);
    }

    p {
      font-size: 1.8rem;
      color: var(--dark-primary);
      margin-left: 1.6rem;
    }
  }

  div + div {
    margin-top: 2.4rem;
  }

  a:hover {
    opacity: 0.8;
  }

  @media (min-width: 700px) {
    div {
      svg {
        width: 3.2rem;
        height: 3.2rem;
      }

      p {
        font-size: 2.4rem;
        margin-left: 2.4rem;
      }
    }
  }

  @media (min-width: 1180px) {
    margin-top: 0;
    margin-left: 3.6rem;
  }
`;
