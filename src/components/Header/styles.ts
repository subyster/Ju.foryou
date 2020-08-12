import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--pink-ju);
  left: 0%;
  right: 0%;
  top: 0px;
  z-index: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 8rem;
  }

  @media (min-width: 1100px) {
    padding: 0 12rem;
  }
`;

export const HeaderContent = styled.div`
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: League Script;
    font-size: 3.6rem;
    color: var(--dark-purple-ju);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    text-decoration: none;
    font-family: Pompiere;
    color: var(--dark-purple-ju);
    font-size: 32px;
    height: 80px;
    transition: background-color 0.4s;

    &:hover {
      background-color: var(--background);
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 2.1rem;
  }

  svg {
    color: var(--dark-purple-ju);
    height: 3.2rem;
    width: 3.2rem;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 700px) {
    margin-left: 2.4rem;
  }

  @media (min-width: 1100px) {
    margin-left: 8rem;
  }
`;
