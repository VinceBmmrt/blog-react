import { Category } from '../../@types/post';
import './Header.scss';

type HeaderProps = {
  categories: Category[];
};
function Header({ categories }: HeaderProps) {
  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>
        {categories.map((category) => (
          <a
            className="menu-link"
            href={`/category/${category.slug}`}
            key={category.id}
          >
            {category.name}
          </a>
        ))}
        <button className="menu-btn" type="button">
          Activer le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
