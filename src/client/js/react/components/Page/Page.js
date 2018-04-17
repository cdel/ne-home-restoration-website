import React from 'react';
import Navbar from '_containers/Navbar/Navbar_container';
import Footer from '_containers/Footer/Footer_container';
import './Page.scss';

export const Page = ({children}) => (
  <div className="Page">
    <Navbar />
    <main className="Page-content">
      {children}
    </main>
    <Footer />
  </div>
);

export const PageSection = (props) => {
  return (
    <section className="Page-section">
      {props.children}
    </section>
  );
}

export default Page;