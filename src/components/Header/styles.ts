import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--secondary);
  left: 0%;
  right: 0%;
  top: 0px;
  z-index: 10;
  position: fixed;
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 8rem;
  }

  @media (min-width: 1180px) {
    padding: 0 12rem;
  }
`;

export const HeaderContent = styled.div`
  height: 6.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    color: var(--dark-primary);
  }

  @media (min-width: 700px) {
    height: 8rem;

    h1 {
      font-size: 3.2rem;
    }
  }
`;

export const Menu = styled.div`
  display: none;

  > a,
  > button {
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 2.4rem;
    text-decoration: none;
    color: var(--dark-primary);
    height: 8rem;
    transition: background-color 0.4s;

    span {
      font-size: 2.8rem;
      display: none;
    }

    svg {
      height: 3.6rem;
      width: 3.6rem;
    }

    &:hover {
      background-color: var(--background);
    }
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1180px) {
    > a,
    > button {
      svg {
        display: none;
      }

      span {
        display: inline;
      }
    }
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  background-color: var(--background);
  box-shadow: 1px 2px 4px var(--dark-primary);
  width: 100vw;
  z-index: 1;

  display: flex;
  flex-direction: column;

  a,
  button {
    display: flex;
    align-items: center;

    padding: 1.6rem;
    font: 500 2.4rem Roboto;
    color: var(--dark-primary);
    transition: background-color 0.4s;

    svg {
      margin-right: 2rem;
    }

    &:hover {
      background-color: var(--secondary);
    }
  }

  button {
    color: var(--red);
    background: transparent;
  }

  @media (min-width: 700px) {
    left: unset;
    width: unset;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 2.1rem;
  }

  svg {
    color: var(--dark-primary);
    height: 3.2rem;
    width: 3.2rem;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 700px) {
    margin-left: 2.4rem;
  }

  @media (min-width: 1180px) {
    margin-left: 8rem;
  }
`;

export const MobileMenu = styled.div`
  > button {
    background-color: var(--secondary);
    transition: opacity 0.3s;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  #mobile-menu {
    position: absolute;
    top: 6.4rem;
    right: -2rem;
    left: -2rem;
    box-shadow: 1px 2px 4px var(--dark-primary);

    > a,
    > button {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 100%;
      padding: 2rem;
      background-color: var(--light-primary);
      transition: background-color 0.3s;

      color: var(--dark1);

      svg {
        width: 2.8rem;
        height: 2.8rem;
      }

      span {
        font-size: 2.4rem;
        font-weight: 500;

        margin-left: 1.6rem;
      }

      &:hover {
        background-color: var(--secondary);
      }
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
