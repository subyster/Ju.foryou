import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--pink-ju);
  left: 0%;
  right: 0%;
  top: 0px;
  z-index: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
`;

export const HeaderContent = styled.div`
  height: 80px;

  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: League Script;
    font-size: 36px;
    color: var(--dark-purple-ju);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 448px;

  a {
    display: flex;
    align-items: center;
    padding: 0 16px;
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

  a + a {
    margin-left: 23px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;

  a + a {
    margin-left: 21px;
  }

  svg {
    color: var(--dark-purple-ju);
    height: 32px;
    width: 32px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
