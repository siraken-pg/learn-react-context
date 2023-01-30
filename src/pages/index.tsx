import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Layout from '../layouts/Layout';

const IndexPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Layout>
        <div className="container py-5">
          <div className="mb-5">
            {isAuthenticated ? (
              <h1 className="text-2xl font-bold">Welcome to the app!</h1>
            ) : (
              <h1 className="text-2xl font-bold">
                Welcome to the app! Please <Link to="/login">login</Link> to
                continue.
              </h1>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold">Firebase</h2>
            <ul>
              <li>
                <Link to="/firebase">Firebase Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
