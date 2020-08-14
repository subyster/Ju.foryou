/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, ChangeEvent } from 'react';

import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { FiFilter, FiLogOut } from 'react-icons/fi';
import {
  Container,
  Content,
  SideContainer,
  Profile,
  ProfilePicture,
  ProfileInfo,
  Filters,
  ItensContainer,
  ItensScroll,
} from './styles';

import { useAuth } from '../../hooks/auth';

import profilePic from '../../assets/arthur.PNG';
import jeansImg from '../../assets/jeans.jpg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ItemCard from '../../components/ItemCard';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const [state, setState] = useState({
    available: false,
    pendent: false,
    sold: false,
    clothing: false,
    accessories: false,
    books: false,
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { available, pendent, sold, clothing, accessories, books } = state;

  function handleToggleFilters(): void {
    setAreFiltersVisible(!areFiltersVisible);
  }

  return (
    <Container>
      <Header />

      <Content>
        <SideContainer>
          <Profile>
            <ProfilePicture>
              <img src={profilePic} alt="Arthur" />
              <Link to="/profile">Editar perfil</Link>
            </ProfilePicture>
            <ProfileInfo>
              <h1>Bem vindo,</h1>
              <h2>Arthur</h2>
            </ProfileInfo>
          </Profile>
          <button onClick={signOut} type="button">
            Sair
            <FiLogOut />
          </button>
          <Link to="/new-item">Anunciar novo item</Link>
          <Filters>
            <button onClick={handleToggleFilters} type="button">
              <h1>Filtros</h1>
              <FiFilter size={28} color="var(--dark-purple-ju)" />
            </button>
            {areFiltersVisible && (
              <FormControl component="fieldset">
                <FormLabel component="legend" className="title">
                  Status
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={available}
                        onChange={handleChange}
                        name="available"
                        color="primary"
                      />
                    }
                    label="À venda"
                    className="label"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={pendent}
                        onChange={handleChange}
                        name="pendent"
                        color="primary"
                      />
                    }
                    label="Pendentes"
                    className="label"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sold}
                        onChange={handleChange}
                        name="sold"
                        color="primary"
                      />
                    }
                    label="Vendidos"
                    className="label"
                  />
                </FormGroup>
                <FormLabel component="legend" className="title">
                  Categoria
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={clothing}
                        onChange={handleChange}
                        name="clothing"
                        color="primary"
                      />
                    }
                    label="Roupas"
                    className="label"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={accessories}
                        onChange={handleChange}
                        name="accessories"
                        color="primary"
                      />
                    }
                    label="Acessórios"
                    className="label"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={books}
                        onChange={handleChange}
                        name="books"
                        color="primary"
                      />
                    }
                    label="Livros"
                    className="label"
                  />
                </FormGroup>
              </FormControl>
            )}
          </Filters>
        </SideContainer>
        <ItensContainer>
          <h1>Meus itens:</h1>
          <ItensScroll>
            <ItemCard
              image={jeansImg}
              name="Calça jeans 42"
              value="R$65,00"
              status="available"
            />
            <ItemCard
              image={jeansImg}
              name="Calça jeans 42"
              value="R$65,00"
              status="sold"
            />
            <ItemCard
              image={jeansImg}
              name="Calça jeans 42"
              value="R$65,00"
              status="pendent"
            />
            <ItemCard
              image={jeansImg}
              name="Calça jeans 42"
              value="R$65,00"
              status="available"
            />
          </ItensScroll>
        </ItensContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
