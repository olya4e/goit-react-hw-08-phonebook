import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { ImHome, ImAddressBook } from 'react-icons/im';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" end>
        <ImHome className={css.icon} />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" end>
          <ImAddressBook className={css.icon} />
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
