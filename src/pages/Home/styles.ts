import styled from 'styled-components';

export const Container = styled.div``;

export const FirstBlock = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const AboutUs = styled.div`
  max-width: 72rem;
  min-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    margin-top: 5.6rem;
    max-width: 36rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-family: Pompiere;
      font-size: 5.6rem;
      color: var(--dark1);
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    p {
      margin-top: 1.6rem;
      font-style: italic;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.9rem;
      display: flex;
      align-items: center;
      text-align: center;

      color: var(--dark-primary);
    }
  }
`;

export const ToSignUp = styled.div`
  margin-top: 5.6rem;
  max-width: 72rem;
  min-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 42rem;
    margin-bottom: 7.2rem;
  }

  h1 {
    font-family: Pompiere;
    font-size: 8.8rem;
    line-height: 10.6rem;
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

    background: var(--primary);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    width: 30rem;
    height: 7.2rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2.2rem;
    text-decoration: none;
    color: var(--background);

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-primary);
    }
  }
`;

export const PorqueComprar = styled.div`
  margin-top: 16rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h1 {
    font-family: Pompiere;
    font-size: 6.4rem;
    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h2 {
    font-size: 2.4rem;
    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ReasonsList = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div + div {
    margin-top: 2.8rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.8rem;
    grid-column-gap: 4rem;

    div + div {
      margin-top: 0;
    }
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1350px) {
    display: flex;
    flex-direction: row;
    grid-column-gap: 0;

    div + div {
      margin-left: 1.2rem;
    }
  }
`;

export const HowToAnnounce = styled.div`
  margin-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HowToAnnounceTitle = styled.div`
  max-width: 40rem;
  max-height: 16rem;

  font-family: Pompiere;
  font-size: 9.2rem;
  line-height: 100.3%;
  text-align: center;

  color: #500a0f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HowToAnnounceBox = styled.div`
  background-color: var(--secondary);
  border-radius: 3.2rem;
  padding: 1.6rem;
  margin: 6rem;
  box-shadow: 1px 2px 4px var(--primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--dark1);
    flex-shrink: 0;
  }

  @media (min-width: 1100px) {
    width: 101rem;
    height: 46rem;
  }

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const HowToAnnounceContent = styled.div`
  max-width: 79rem;
  margin: 3.8rem 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: bold;
    font-size: 3.2rem;
    text-align: center;

    color: var(--dark1);
  }

  p {
    margin-top: 3.6rem;
    font-size: 2.2rem;
    line-height: 2.6rem;
    text-align: center;

    color: var(--dark-primary);
  }
`;

export const HowMuch = styled.div`
  margin-top: 13.2rem;

  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HowMuchTitle = styled.div`
  margin: 0 2.4rem;
  text-align: center;
  color: var(--dark1);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    font-family: Pompiere;
    font-size: 6.4rem;
    line-height: 7.7rem;
  }

  h2 {
    margin-top: 1.6rem;
    font-size: 2.4rem;
  }
`;

export const HowMuchLine = styled.div`
  margin-top: 3.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    margin: 3.6rem 4.8rem;
  }

  @media (min-width: 1100px) {
    margin: 3.6rem 11.3rem;
    flex-direction: row;
  }
`;

export const HowMuchBox1 = styled.div`
  height: 100%;
  margin: 0 2.4rem;
  padding: 2.2rem 1.8rem;
  background-color: var(--secondary);
  border-radius: 3.2rem;
  box-shadow: 1px 2px 4px var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  p {
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: var(--dark-primary);
  }

  p + p {
    margin-top: 2.4rem;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: var(--dark1);
  }
`;

export const HowMuchBox2 = styled.div`
  margin: 2.4rem;
  background-color: var(--secondary);
  border-radius: 3.2rem;
  padding: 2.8rem 4.2rem;
  box-shadow: 1px 2px 4px var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  h1 {
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: bold;
    color: var(--dark1);
  }

  p {
    margin-top: 2.4rem;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: var(--dark-primary);
  }

  #last-paragraph {
    font-weight: bold;
    color: var(--dark1);
  }

  @media (min-width: 1100px) {
    margin-top: 0;
    margin-left: 6.8rem;
  }
`;

export const HowMuchBox3 = styled.div`
  height: 22rem;
  width: 37.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-family: Pompiere;
    font-size: 4.8rem;
    line-height: 4.8rem;
    color: var(--dark1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--dark-primary);
  }
`;

export const HowMuchValues = styled.div`
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 2.4rem;
  }

  @media (min-width: 800px) {
    flex-direction: row;

    div + div {
      margin-left: 2.4rem;
      margin-top: 0;
    }
  }

  @media (min-width: 1100px) {
    margin-top: 0;
    margin-left: 7rem;
  }
`;

export const HowMuchValuesBox = styled.div`
  width: 24rem;
  height: 24rem;
  background-color: var(--secondary);
  border-radius: 1.6rem;
  box-shadow: 1px 2px 4px var(--primary);
  padding: 2.4rem 0;

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
    margin-top: 0.8rem;
    font-size: 1.6rem;
    color: var(--dark1);
  }
`;

export const HowMuchGet = styled.p`
  font-size: 8.8rem;
  color: var(--dark-primary);
`;

export const Obs = styled.div`
  margin-top: 9.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ObsTitle = styled.div`
  font-family: Pompiere;
  font-size: 6.4rem;
  color: var(--dark1);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ObsInfo = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 3.6rem;
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    div + div {
      margin-top: 0;
    }
  }
`;

export const ObsBox = styled.div`
  max-width: 56rem;
  max-height: 44rem;
  margin-right: 4.8rem;
  margin-left: 4.8rem;
  background: var(--secondary);
  border-radius: 3.2rem;
  box-shadow: 1px 2px 4px var(--primary);
  padding: 4.2rem 7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  p {
    margin-bottom: 2.4rem;
    font-size: 2rem;
    line-height: 2.3rem;
    color: var(--dark-primary);
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Recap = styled.div`
  margin-top: 9.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecapTitle = styled.h1`
  font-family: Pompiere;
  font-size: 8rem;
  color: var(--dark1);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RecapInfo = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 3.6rem;
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    div + div {
      margin-top: 0;
    }
  }
`;

export const RecapBox = styled.div`
  background: var(--secondary);
  border-radius: 3.2rem;
  box-shadow: 1px 2px 4px var(--primary);
  margin: 0 4.8rem;
  padding: 3.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  p {
    margin-top: 1.6rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.3rem;
    text-align: center;
    color: var(--dark-primary);
  }

  @media (min-width: 1100px) {
    padding: 4.8rem 7.2rem;
    max-width: 56rem;
    max-height: 49rem;
  }
`;

export const JoinUs = styled.div`
  margin: 8.2rem 3.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  h1 {
    font-family: Pompiere;
    font-size: 7.2rem;
    line-height: 8.7rem;
    color: var(--dark1);
  }

  h2 {
    margin-top: 3.6rem;
    font-family: Pompiere;
    font-size: 3.6rem;
    line-height: 8.7rem;
    color: var(--dark1);
  }

  a {
    padding: 0.8rem;
    border-radius: 1.6rem;
    font-weight: bold;
    font-size: 3.6rem;
    text-decoration: none;
    color: var(--dark-primary);
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--dark-primary);
      color: var(--background);
    }
  }
`;
