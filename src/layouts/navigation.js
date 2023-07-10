import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
  return (
    <>
      <div className="header-navbar">
        <header>Pokedex</header>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
        </ul>
      </div>

      {children}

      <footer>Tout droit réservé</footer>
    </>
  );
};

export default Navigation;
