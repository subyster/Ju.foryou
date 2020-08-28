import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 8rem auto 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    margin-top: 10rem;
    flex-direction: row;
    align-items: unset;
  }
`;

export const SideContainer = styled.div`
  width: 36.2rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    position: sticky;
    top: 10rem;
  }

  @media (min-width: 1180px) {
    align-items: unset;
  }

  > a {
    margin-top: 3.2rem;
    width: 30rem;
    height: 6rem;
    left: 12.2rem;
    background-color: var(--primary);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;

    font-weight: 700;
    font-size: 2.4rem;
    text-decoration: none;
    color: var(--background);

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-primary);
    }

    @media (min-width: 1180px) {
      margin-top: 5.6rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  img {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (min-width: 1180px) {
    img {
      height: 12.8rem;
      width: 12.8rem;
    }
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 2.4rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    color: var(--dark1);
  }

  h2 {
    font-size: 2.2rem;
    color: var(--dark-primary);
  }

  @media (min-width: 1180px) {
    h1 {
      font-size: 3.6rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }
`;

export const Filters = styled.div`
  margin-top: 3.6rem;
  max-width: 136px;

  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    background: transparent;
    color: var(--dark-primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    h1 {
      font-size: 3.2rem;
    }

    svg {
      margin-left: 1.2rem;
    }
  }

  div {
    margin-top: 2.4rem;
    width: 30rem;
  }

  #filterButton {
    color: var(--background);
    background-color: var(--primary);
    margin-top: 2.4rem;
    width: 30rem;
    height: 6rem;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    font-size: 2.4rem;
    font-weight: 700;
    transition: background-color 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
      background-color: var(--dark-primary);
    }
  }

  @media (min-width: 700px) {
    margin-top: 5.2rem;
  }

  @media (min-width: 1180px) {
    align-items: unset;
  }
`;

export const ItensContainer = styled.div`
  margin-top: 3.6rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4rem;
    color: var(--dark-primary);
  }

  h2 {
    margin-top: 3.2rem;
    padding: 0 2rem;
    font-size: 2.4rem;
    text-align: center;
    color: var(--dark1);
  }

  @media (min-width: 700px) {
    margin-top: 0;
  }

  @media (min-width: 1180px) {
    align-items: unset;
    max-width: 81.6rem;
  }
`;

export const ItensScroll = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 4rem;
  }

  @media (min-width: 700px) {
    margin-top: 3.2rem;
    margin-left: 3.2rem;
  }

  @media (min-width: 1180px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 9.6rem;
    grid-column-gap: 8rem;

    div + div {
      margin-top: 0;
    }
  }
`;
