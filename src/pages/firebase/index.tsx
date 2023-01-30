import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Layout from '../../layouts/Layout';

const FirebaseIndexPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Layout>
        <div className="container py-5">
          {isAuthenticated ? (
            <h1 className="text-2xl font-bold">Welcome to the Firebase app!</h1>
          ) : (
            <h1 className="text-2xl font-bold">
              Welcome to the Firebase app! Please{' '}
              <Link to="/firebase/login">login</Link> to continue.
            </h1>
          )}
        </div>
      </Layout>
    </>
  );
};

export default FirebaseIndexPage;
