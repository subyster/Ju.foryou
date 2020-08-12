import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 12.2rem 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
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

  @media (min-width: 1100px) {
    align-items: unset;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 12.8rem;
    width: 12.8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    font-size: 1rem;
    color: var(--dark-purple-ju);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 2.4rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Pompiere;
    font-size: 4.2rem;
    color: var(--dark1);
  }

  h2 {
    font-family: Pompiere;
    font-size: 2.8rem;
    color: var(--dark-purple-ju);
  }
`;

export const NewItemButton = styled.button`
  margin-top: 4.2rem;
  width: 30rem;
  height: 6rem;
  left: 12.2rem;
  background-color: var(--purple-ju);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.6rem;

  font-weight: bold;
  font-size: 2.4rem;
  color: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--dark-purple-ju);
  }

  @media (min-width: 1100px) {
    margin-top: 8.6rem;
  }
`;

export const Filters = styled.div`
  margin-top: 3.6rem;
  max-width: 136px;

  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    background: transparent;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    h1 {
      font-family: Pompiere;
      font-size: 3.6rem;
      color: var(--dark-purple-ju);
      margin-right: 1.2rem;
    }
  }

  .title {
    margin-top: 1.2rem;
    font-family: Pompiere;
    font-size: 3.2rem;
    color: var(--purple-ju);
  }

  .label {
    font-size: 2.4rem;
    color: var(--dark-purple-ju);
  }

  @media (min-width: 700px) {
    margin-top: 5.2rem;
  }
`;

export const ItensContainer = styled.div`
  margin-top: 3.6rem;
  max-width: 83.4rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Pompiere;
    font-size: 4.8rem;
    color: var(--dark1);
  }

  @media (min-width: 700px) {
    margin-top: 0;
  }

  @media (min-width: 1100px) {
    align-items: unset;
  }
`;

export const ItensScroll = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 9.6rem;
  }

  @media (min-width: 700px) {
    margin-left: 3.2rem;
  }

  @media (min-width: 1100px) {
    max-height: 80rem;
    padding-bottom: 0.8rem;
    margin-bottom: -10rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 9.6rem;
    justify-content: space-between;

    div + div {
      margin-top: 0;
    }

    overflow: scroll;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--purple-ju);
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--dark-purple-ju);
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }
`;
