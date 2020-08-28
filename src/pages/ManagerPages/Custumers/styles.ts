import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 6.4rem;

  width: 100%;
  margin-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1180px) {
    margin-top: 8rem;
  }

  @media (min-width: 1180px) {
    max-width: 80vw;
    margin: 11.6rem;
    flex-direction: row;
    align-items: unset;
    justify-content: space-between;
  }
`;

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.8rem;
    margin-left: 2.4rem;
    margin-bottom: 1.6rem;
    color: var(--dark1);
  }

  a {
    width: 100%;
    height: 5.6rem;
    padding-left: 2.4rem;
    padding-right: 3.2rem;
    border-top: 1px solid var(--primary);
    transition: background-color 0.2s;
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
      height: 3.6rem;
      width: 3.6rem;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 2rem;
    }

    span {
      color: var(--dark1);
      font-size: 2rem;
      line-height: 3.8rem;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:hover {
      background-color: var(--light-primary);
    }
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 4rem;
      margin-left: 6.4rem;
      margin-bottom: 2.4rem;
    }

    a {
      height: 7.2rem;
      padding-left: 8rem;
      padding-right: 11rem;

      img {
        height: 5.4rem;
        width: 5.4rem;
        margin-right: 3.2rem;
      }

      span {
        font-size: 2.4rem;
      }
    }
  }
`;
