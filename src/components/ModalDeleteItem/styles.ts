import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-family: Pompiere;
    font-size: 3.2rem;
    color: var(--dark1);
  }

  span {
    display: flex;
    align-items: center;
    color: var(--dark-primary);
    margin-top: 0.8rem;

    svg {
      color: var(--red);
      margin-right: 0.8rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.4rem;

    button {
      padding: 0.8rem 1.6rem;
      border-radius: 0.8rem;
      background-color: var(--primary);
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      transition: background-color 0.3s;

      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      color: var(--background);

      &:hover {
        background-color: var(--dark-primary);
      }
    }

    #cancel {
      margin-left: 2.4rem;

      &:hover {
        background-color: var(--red);
      }
    }
  }
`;
