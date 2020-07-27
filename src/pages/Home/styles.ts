import styled from 'styled-components';

export const Container = styled.div``;

export const FirstBlock = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  height: 600px;
`;

export const AboutUs = styled.div`
  max-width: 720px;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    max-width: 360px;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-family: Pompiere;
      font-size: 56px;
      color: var(--dark1);
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    p {
      margin-top: 16px;
      font-style: italic;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      text-align: center;

      color: var(--dark-purple-ju);
    }
  }
`;

export const ToSignUp = styled.div`
  max-width: 720px;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 420px;
    margin-bottom: 72px;
  }

  h1 {
    font-family: Pompiere;
    font-size: 88px;
    line-height: 106px;
    display: flex;
    align-items: center;
    text-align: center;

    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--purple-ju);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    width: 300px;
    height: 72px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    text-decoration: none;
    color: var(--background);

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
    }
  }
`;

export const PorqueComprar = styled.div`
  margin-top: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Pompiere;
    font-size: 64px;
    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h2 {
    font-size: 24px;
    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ReasonsList = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const HowToAnnounce = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HowToAnnounceTitle = styled.div`
  max-width: 400px;
  max-height: 160px;

  font-family: Pompiere;
  font-size: 92px;
  line-height: 100.3%;
  text-align: center;

  color: #500a0f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HowToAnnounceBox = styled.div`
  width: 1010px;
  height: 460px;
  background-color: var(--pink-ju);
  border-radius: 32px;
  padding: 16px;
  margin-top: 60px;
  box-shadow: 1px 2px 4px var(--purple-ju);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HowToAnnounceContent = styled.div`
  height: 100%;
  max-width: 790px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-weight: bold;
    font-size: 32px;

    color: var(--dark1);
  }

  p {
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: var(--dark-purple-ju);
  }
`;

export const HowMuch = styled.div`
  margin-top: 132px;
  height: 800px;

  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HowMuchTitle = styled.div`
  text-align: center;
  color: var(--dark1);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    font-family: Pompiere;
    font-size: 64px;
    line-height: 77px;
  }

  h2 {
    font-size: 24px;
  }
`;

export const HowMuchLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HowMuchBox1 = styled.div`
  width: 372px;
  height: 318px;
  padding: 22px 18px;
  background-color: var(--pink-ju);
  border-radius: 32px;
  box-shadow: 1px 2px 4px var(--purple-ju);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  p {
    font-size: 18px;
    line-height: 25px;
    color: var(--dark-purple-ju);
  }

  p + p {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: var(--dark1);
  }
`;

export const HowMuchBox2 = styled.div`
  max-width: 776px;
  height: 318px;
  margin-left: 68px;
  background-color: var(--pink-ju);
  border-radius: 32px;
  padding: 28px 42px;
  box-shadow: 1px 2px 4px var(--purple-ju);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  h1 {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    color: var(--dark1);
  }

  p {
    font-size: 18px;
    line-height: 22px;
    color: var(--dark-purple-ju);
  }

  #last-paragraph {
    font-weight: bold;
    color: var(--dark1);
  }
`;

export const HowMuchBox3 = styled.div`
  height: 220px;
  width: 378px;
  margin-right: 69px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  h1 {
    font-family: Pompiere;
    font-size: 48px;
    line-height: 48px;
    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 12px;
    line-height: 18px;
    color: var(--dark-purple-ju);
  }
`;

export const HowMuchValues = styled.div`
  width: 776px;
  display: flex;
  justify-content: space-between;
`;

export const HowMuchValuesBox = styled.div`
  width: 240px;
  height: 240px;
  background-color: var(--pink-ju);
  border-radius: 16px;
  box-shadow: 1px 2px 4px var(--purple-ju);
  padding: 24px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const HowMuchSold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 8px;
    font-size: 16px;
    color: var(--dark1);
  }
`;

export const HowMuchGet = styled.p`
  font-size: 88px;
  color: var(--dark-purple-ju);
`;

export const Obs = styled.div`
  margin-top: 96px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ObsTitle = styled.div`
  font-family: Pompiere;
  font-size: 64px;
  color: var(--dark1);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ObsInfo = styled.div`
  margin-top: 96px;
  display: flex;
`;

export const ObsLeft = styled.div`
  width: 560px;
  height: 440px;
  background: var(--pink-ju);
  border-radius: 32px;
  box-shadow: 1px 2px 4px var(--purple-ju);
  margin-right: 96px;
  padding: 42px 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  p {
    font-size: 20px;
    line-height: 23px;
    color: var(--dark-purple-ju);
  }
`;

export const ObsRight = styled.div`
  width: 560px;
  height: 440px;
  background: var(--pink-ju);
  border-radius: 32px;
  box-shadow: 1px 2px 4px var(--purple-ju);
  padding: 42px 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  p {
    font-size: 20px;
    line-height: 23px;
    color: var(--dark-purple-ju);
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Recap = styled.div`
  margin-top: 96px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecapTitle = styled.h1`
  font-family: Pompiere;
  font-size: 80px;
  color: var(--dark1);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RecapInfo = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const RecapBox = styled.div`
  width: 560px;
  height: 490px;
  background: var(--pink-ju);
  border-radius: 32px;
  box-shadow: 1px 2px 4px var(--purple-ju);
  margin: 0 48px;
  padding: 48px 72px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: var(--dark-purple-ju);
  }
`;

export const JoinUs = styled.div`
  margin-top: 82px;
  height: 174px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  h1 {
    font-family: Pompiere;
    font-size: 72px;
    line-height: 87px;
    color: var(--dark1);
  }

  h2 {
    font-family: Pompiere;
    font-size: 36px;
    color: var(--dark1);
  }

  a {
    padding: 8px;
    border-radius: 16px;
    font-weight: bold;
    font-size: 36px;
    text-decoration: none;
    color: var(--dark-purple-ju);
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-purple-ju);
      color: var(--background);
    }
  }
`;
