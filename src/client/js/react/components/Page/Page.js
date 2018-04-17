import React from 'react';
import Navbar from '_containers/Navbar/Navbar_container';
import Footer from '_containers/Footer/Footer_container';
import cx from '_utilities/classnames';
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
  const {fluid} = props;
  return (
    <section className={cx("Page-section", {
      'Page-section--fluid': fluid
    })}>
      {props.children}
    </section>
  );
}

export const SectionCard = props => {
  const {title, children, textAlignment, background, subTitle} = props;
  return (
    <PageSection fluid>
      <div className={cx("Page-sectionCard-content", {
        'Page-sectionCard-content--overlay': !!background,
        [`Page-sectionCard-content--align${textAlignment}`]: !!textAlignment
      })}>
        <div className="Page-sectionCard-titleWrapper">
          <h2 className="Page-sectionCard-title">{title}</h2>
          {subTitle && (
            <h3 className="Page-sectionCard-title">{subTtile}</h3>
          )}
        </div>
        {children}
      </div>
    </PageSection>
  );
}

export default Page;