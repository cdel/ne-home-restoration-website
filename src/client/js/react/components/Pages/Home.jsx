import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';
import Slideshow from '_components/Slideshow/Slideshow';
import ContactForm from '_components/ContactForm/ContactForm';

const showCaseHeight = 400;

const HomePage = props => {
  const {photos} = props;
  return (
    <div className="HomePage">
      <Slideshow photos={photos} showCaption={false} height={showCaseHeight} />
      <SectionCard title="Our Mission" icon="glyphicon glyphicon-eye-open">
        <p>Hello World!</p>
        <ContactForm />
      </SectionCard>
    </div>
  );
}

export default HomePage;