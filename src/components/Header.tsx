import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="bg-white shadow p-5">
      <div className="flex flex-row justify-between">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <ul>
          <li>
            {isAuthenticated ? `Welcome!` : <Link to="/login">Login</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
