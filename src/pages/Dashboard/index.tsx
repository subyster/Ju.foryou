/* eslint-disable react/jsx-wrap-multilines */
import React, {
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { Link } from 'react-router-dom';
import { FiFilter, FiX } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
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
import Select from '../../components/Select';

interface CategoryProps {
  name: string;
}

interface FilterItemsFormData {
  category?: string;
  status?: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();

  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedStatus, setSelectedStatus] = useState('0');

  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [clearFilters, setClearFilters] = useState(false);

  const loadItems = useCallback(async () => {
    api.get(`/items/${user.id}`).then(response => {
      setItems(response.data);
    });
  }, [user.id]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    api.get<CategoryProps[]>('/categories').then(response => {
      const categoriesNames = response.data.map(category => category.name);

      setCategories(categoriesNames.sort());
    });
  }, []);

  const handleToggleFilters = useCallback((): void => {
    setAreFiltersVisible(!areFiltersVisible);
  }, [areFiltersVisible]);

  const handleClearFilters = useCallback(() => {
    setClearFilters(false);
    setSelectedCategory('0');

    loadItems();
  }, [loadItems]);

  const handleSelectedCategory = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const category = e.target.value;
      setSelectedCategory(category);
    },
    [],
  );

  const handleSelectedStatus = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const status = e.target.value;
      setSelectedStatus(status);
    },
    [],
  );

  const handleFilterItems = useCallback(
    async (data: FilterItemsFormData) => {
      const { category, status } = data;

      if (category === '0') {
        const filtersResponse = await api.get(
          `/items/search_items/${user.id}`,
          {
            params: {
              status,
            },
          },
        );

        setItems(filtersResponse.data);
      } else if (status === '0') {
        const filtersResponse = await api.get(
          `/items/search_items/${user.id}`,
          {
            params: {
              category,
            },
          },
        );

        setItems(filtersResponse.data);
      } else {
        const filtersResponse = await api.get(
          `/items/search_items/${user.id}`,
          {
            params: {
              category,
              status,
            },
          },
        );

        setItems(filtersResponse.data);
      }

      setClearFilters(true);
    },
    [user.id],
  );

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
              <FiFilter size={28} color="var(--dark-primary)" />
            </button>
            {clearFilters && (
              <button type="button" onClick={handleClearFilters}>
                <span>Limpar filtros</span>
                <FiX size={16} />
              </button>
            )}
            {areFiltersVisible && (
              <Form ref={formRef} onSubmit={handleFilterItems}>
                <Select
                  name="category"
                  title="Filtrar por categoria"
                  value={selectedCategory}
                  onChange={handleSelectedCategory}
                >
                  <option value="0"> </option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>

                <Select
                  name="status"
                  title="Filtrar por status"
                  value={selectedStatus}
                  onChange={handleSelectedStatus}
                >
                  <option value="0"> </option>
                  <option value="pendent">Pendente</option>
                  <option value="available">À venda</option>
                  <option value="sold">Vendido</option>
                </Select>

                <button type="submit" id="filterButton">
                  Filtrar
                </button>
              </Form>
            )}
          </Filters>
        </SideContainer>
        <ItensContainer>
          <h1>Meus itens:</h1>
          {items.length === 0 && (
            <h2>
              Você ainda não tem nenhum item anunciado com a gente, clique no
              botão de anúncio e comece a desapegar
            </h2>
          )}
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
