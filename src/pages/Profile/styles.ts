import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContent = styled.div`
  margin-top: 3.6rem;
  max-width: 105rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: unset;
  }
`;

export const TopText = styled.div`
  width: 31.2rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Pompiere;
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: var(--dark1);
  }

  span {
    font-size: 2rem;
    line-height: 2.3rem;
    color: var(--dark-purple-ju);
  }
`;

export const UpdatePicture = styled.div`
  display: flex;
  position: relative;
  margin-top: 3.6rem;

  img {
    height: 24rem;
    width: 24rem;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (min-width: 1100px) {
    margin-left: 81px;
    margin-top: 0;
  }
`;

export const UpdatePictureButton = styled.button`
  position: absolute;
  background-color: var(--dark-purple-ju);
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: -1rem;
  right: 2.2rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--purple-ju);
  }
`;

export const FormContent = styled.div`
  margin-top: 7.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const FormColumn = styled.div`
  width: 47.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    margin: 0 5rem;
  }
`;

export const FormLine = styled.div`
  margin-bottom: 3.2rem;
  max-width: 47.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    & + div {
      margin-left: 2.5rem;
    }
  }

  #confirm {
    width: 100%;
    height: 6.4rem;
    background-color: var(--purple-ju);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 2.4rem;
    color: var(--background);
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
    }
  }
`;

export const ConfirmForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
