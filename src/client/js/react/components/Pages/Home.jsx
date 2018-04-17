import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';
import Slideshow from '_components/Slideshow/Slideshow';

const showCaseHeight = 400;

const HomePage = props => {
  const {photos} = props;
  return (
    <div className="HomePage">
      <Slideshow photos={photos} showCaption={false} height={showCaseHeight} />
      <SectionCard title="Our Mission">
        <p>Hello World!</p>
      </SectionCard>
    </div>
  );
}

export default HomePage;