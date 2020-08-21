/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, ChangeEvent, useCallback, useEffect } from 'react';

import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
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

import blankAvatar from '../../assets/blank-avatar.svg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ItemCard, { Item } from '../../components/ItemCard';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [items, setItems] = useState([]);

  const [areFiltersVisible, setAreFiltersVisible] = useState(false);

  const [state, setState] = useState({
    available: false,
    pendent: false,
    sold: false,
    clothing: false,
    accessories: false,
    books: false,
  });

  const loadItems = useCallback(async () => {
    api.get(`/items/${user.id}`).then(response => {
      setItems(response.data);
    });
  }, [user.id]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

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
              <img
                src={user.avatar_url ? user.avatar_url : blankAvatar}
                alt={user.name}
              />
            </ProfilePicture>
            <ProfileInfo>
              <h1>
                Bem vind{user.gender === 'M' && 'o'}
                {user.gender === 'F' && 'a'}
                {user.gender === 'N' && 'x'},
              </h1>
              <h2>{user.name}</h2>
            </ProfileInfo>
          </Profile>

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
            {items.map((item: Item) => {
              return <ItemCard key={item.id} item={item} />;
            })}
          </ItensScroll>
        </ItensContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
