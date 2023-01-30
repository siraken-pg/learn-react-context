import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
