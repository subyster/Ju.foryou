import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 80px;

  display: flex;
  justify-content: center;
`;

export const SideContainer = styled.div`
  width: 362px;
  height: 100%;
  margin: 60px 10px;

  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 128px;
    width: 128px;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    font-size: 10px;
    color: var(--dark-purple-ju);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 24px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Pompiere;
    font-size: 42px;
    color: var(--dark1);
  }

  h2 {
    font-family: Pompiere;
    font-size: 28px;
    color: var(--dark-purple-ju);
  }
`;

export const NewItemButton = styled.button`
  margin-top: 86px;
  width: 300px;
  height: 60px;
  left: 122px;
  background-color: var(--purple-ju);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  font-weight: bold;
  font-size: 24px;
  color: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--dark-purple-ju);
  }
`;

export const Filters = styled.div`
  margin: 52px 0 0 24px;
  max-width: 136px;

  display: flex;
  flex-direction: column;

  .title {
    margin-top: 12px;
    font-family: Pompiere;
    font-size: 32px;
    color: var(--purple-ju);
  }

  .label {
    font-size: 16px;
    color: var(--dark-purple-ju);
  }
`;

export const FiltersTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  h1 {
    font-family: Pompiere;
    font-size: 36px;
    color: var(--dark-purple-ju);
    margin-right: 12px;
  }
`;

export const ItensContainer = styled.div`
  width: 834px;
  height: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 32px 0;
    font-family: Pompiere;
    font-size: 48px;
    color: var(--dark1);
  }
`;

export const ItensScroll = styled.div`
  height: 800px;
  margin-bottom: -62px;

  display: grid;
  grid-template-columns: 1fr 1fr;

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
`;
