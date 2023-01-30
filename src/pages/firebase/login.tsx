import { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Layout from '../../layouts/Layout';
import { FirebaseAuth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const FirebaseLoginPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (emailRef.current && passwordRef.current) {
      signInWithEmailAndPassword(
        FirebaseAuth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Layout>
        <div className="container py-5 max-w-3xl">
          <h1 className="text-3xl font-bold mb-3">Login with Firebase Auth</h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border p-1"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="border p-1"
                ref={passwordRef}
              />
            </div>
            <button
              type="button"
              className="bg-black text-white p-3"
              onClick={() => handleSubmit()}
            >
              Login
            </button>
            <button
              type="button"
              className=""
              onClick={() => {
                setIsAuthenticated(false);
                FirebaseAuth.signOut();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FirebaseLoginPage;
