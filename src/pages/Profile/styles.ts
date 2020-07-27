import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContent = styled.div`
  margin-top: 36px;
  width: 1050px;
  display: flex;
`;

export const TopText = styled.div`
  width: 312px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Pompiere;
    font-size: 48px;
    line-height: 58px;
    color: var(--dark1);
  }

  span {
    font-size: 20px;
    line-height: 23px;
    color: var(--dark-purple-ju);
  }
`;

export const UpdatePicture = styled.div`
  display: flex;
  margin-left: 81px;
  position: relative;

  img {
    height: 240px;
    width: 240px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UpdatePictureButton = styled.button`
  position: absolute;
  background-color: var(--dark-purple-ju);
  width: 56px;
  height: 56px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: -10px;
  right: 22px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--purple-ju);
  }
`;

export const FormContent = styled.div`
  margin-top: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormColumn = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLine = styled.div`
  margin-bottom: 32px;
  width: 475px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  #confirm {
    width: 100%;
    height: 64px;
    margin-top: 20px;
    background-color: var(--purple-ju);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 24px;
    color: var(--background);
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
    }
  }
`;

export const SmallSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 75px;

  h1 {
    margin: 0 0 8px 8px;
    font-size: 14px;
    color: var(--dark-purple-ju);
  }

  select {
    height: 64px;
    width: 100%;
    padding: 0 24px;

    background: var(--white);
    box-shadow: 1px 2px 4px var(--purple-ju);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--dark1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const CitySelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;

  h1 {
    margin: 0 0 8px 8px;
    font-size: 14px;
    color: var(--dark-purple-ju);
  }

  select {
    height: 64px;
    width: 100%;
    padding: 0 24px;

    background: var(--white);
    box-shadow: 1px 2px 4px var(--purple-ju);
    border-radius: 8px;
    display: flex;
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const ConfirmForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
