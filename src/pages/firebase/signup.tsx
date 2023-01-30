import { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Layout from '../../layouts/Layout';
import { FirebaseAuth } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const FirebaseSignUpPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (emailRef.current && passwordRef.current) {
      createUserWithEmailAndPassword(
        FirebaseAuth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);
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
          <h1 className="text-3xl font-bold mb-3">
            Sign Up with Firebase Auth
          </h1>
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
              Sign Up
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FirebaseSignUpPage;
