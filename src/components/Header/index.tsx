import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiInstagram,
  FiMail,
  FiUser,
  FiEdit,
  FiLogOut,
  FiClipboard,
  FiTwitter,
  FiLogIn,
  FiHome,
  FiMenu,
} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Menu,
  ProfileMenu,
  Social,
  HeaderContent,
  MobileMenu,
} from './styles';

interface HeaderProps {
  isHome?: boolean;
  isSignIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome, isSignIn, children }) => {
  const { signOut, user } = useAuth();

  const [displayProfileMenu, setDisplayProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggleProfileMenu = useCallback(() => {
    setDisplayProfileMenu(!displayProfileMenu);
  }, [displayProfileMenu]);

  const handleToggleMobileMenu = useCallback(() => {
    setMobileMenu(!mobileMenu);
  }, [mobileMenu]);

  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <h1>SManager</h1>
        </Link>

        <Menu>
          {user && (
            <button onClick={handleToggleProfileMenu} type="button">
              <FiUser />
              <span>Perfil</span>
            </button>
          )}
          {displayProfileMenu && (
            <ProfileMenu>
              <Link to="/manager">
                <FiClipboard size={24} />
                Gerenciar
              </Link>
              <Link to="/dashboard">
                <FiUser size={24} />
                Meu Perfil
              </Link>
              <Link to="/profile">
                <FiEdit size={24} />
                Editar Perfil
              </Link>
              <button onClick={signOut} type="button">
                <FiLogOut size={24} />
                Sair
              </button>
            </ProfileMenu>
          )}
          {!isHome && (
            <Link to="/">
              <FiHome />
              <span>Home</span>
            </Link>
          )}
          {!user && !isSignIn && (
            <Link to="/signin">
              <FiLogIn />
              <span>Login</span>
            </Link>
          )}

          <Social>
            <a href="/">
              <FiTwitter />
            </a>
            <a href="/">
              <FiInstagram />
            </a>
            <a href="/">
              <FiMail />
            </a>
          </Social>
        </Menu>

        <MobileMenu>
          <button type="button" onClick={handleToggleMobileMenu}>
            <FiMenu />
          </button>

          {mobileMenu && (
            <div id="mobile-menu">
              {!isHome && (
                <Link to="/">
                  <FiHome />
                  <span>Home</span>
                </Link>
              )}
              {!user && !isSignIn ? (
                <Link to="/signin">
                  <FiLogIn />
                  <span>Login</span>
                </Link>
              ) : (
                <>
                  <Link to="/manager">
                    <FiClipboard />
                    <span>Gerenciar</span>
                  </Link>
                  <Link to="/dashboard">
                    <FiUser />
                    <span>Meu Perfil</span>
                  </Link>
                  <Link to="/profile">
                    <FiEdit />
                    <span>Editar Perfil</span>
                  </Link>
                  <button onClick={signOut} type="button">
                    <FiLogOut />
                    <span>Sair</span>
                  </button>
                </>
              )}
            </div>
          )}
        </MobileMenu>
      </HeaderContent>
      {children}
    </Container>
  );
};

export default Header;
