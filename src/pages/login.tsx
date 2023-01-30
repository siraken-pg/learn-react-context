import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Layout from '../layouts/Layout';

const LoginPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Layout>
        <div className="container py-5 max-w-3xl">
          <h1 className="text-3xl font-bold mb-3">Login</h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="border p-1" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="border p-1" />
            </div>
            <button
              type="button"
              className="bg-black text-white p-3"
              onClick={() => setIsAuthenticated(true)}
            >
              Login
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
