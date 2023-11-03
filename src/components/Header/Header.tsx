import { Link } from 'react-router-dom';
import { Category } from '../../@types/post';
import './Header.scss';

// type SetterState<T> = React.Dispatch<React.SetStateAction<T>>;

type HeaderProps = {
  categories: Category[];
  zenMode: boolean;
  // Le vrai type d'une fonction de setter d'un useState ressemble à ça :
  // setZenMode: (zenMode: boolean | ((oldValue: boolean) => boolean)) => void;
  setZenMode: React.Dispatch<React.SetStateAction<boolean>>;
};
function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <Link className="menu-link menu-link--selected" to="/">
          Accueil
        </Link>
        {categories.map((category) => (
          <Link
            className="menu-link"
            to={`/category/${category.slug}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
        <button
          className="menu-btn"
          type="button"
          onClick={() => setZenMode((active) => !active)}
        >
          {zenMode ? 'Désactiver ' : 'Activer '}le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
