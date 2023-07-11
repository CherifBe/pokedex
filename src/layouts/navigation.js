import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
  return (
    <>
      <div className="header-navbar">
        <header>Pokedex + Weather</header>
        <ul className='navbar'>
          <li>
            <Link to="/">Pokedex</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </div>

      {children}

      <footer>Tout droit réservé</footer>
    </>
  );
};

export default Navigation;
