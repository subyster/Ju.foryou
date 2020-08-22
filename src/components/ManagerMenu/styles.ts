import styled from 'styled-components';

export const Container = styled.div`
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

      & + a {
        margin-top: 1.6rem;
      }
    }
  }
`;
