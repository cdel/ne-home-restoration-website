import React from 'react';
import Navbar from '_components/Navbar/Navbar';
import Footer from '_components/Footer/Footer';

const Page = ({children}) => (
  <div className="Page">
    <Navbar />
    <main className="Page-content">
      {children}
    </main>
    <Footer />
  </div>
);

export default Page;