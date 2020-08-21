import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 11.6rem;
  margin-bottom: 0;

  /* margin-top: 11.6rem;
  margin-left: 12.2rem;
  max-width: 120.6rem; */

  display: flex;
  justify-content: space-between;
`;

export const SideMenu = styled.div`
  display: flex;

  ::after {
    content: '';
    width: 1.5px;
    height: 80rem;
    border-radius: 0.5px;
    margin-left: 1.4rem;
    background-color: var(--purple-ju);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    button,
    a {
      font-family: Pompiere;
      font-size: 4.2rem;
      line-height: 5rem;
      text-decoration: none;
      color: var(--dark-purple-ju);
      background-color: transparent;
      transition: background-color 0.3s;

      width: 25.6rem;
      height: 6.4rem;
      border-radius: 3.2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--dark-purple-ju);
        color: var(--purple-ju);
      }

      & + button {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 9.6rem;
  grid-column-gap: 12rem;
  justify-content: space-between;

  div {
    div:first-child {
      height: 5rem;
      border-radius: 2.4rem 2.4rem 0 0;
      background-color: var(--light-purple-ju);
      border-bottom: 0.8px solid var(--purple-ju);

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 50%;
        margin-right: 1.6rem;
      }

      span {
        font-family: Pompiere;
        font-size: 28px;
        color: var(--dark-purple-ju);
      }
    }
  }
`;
