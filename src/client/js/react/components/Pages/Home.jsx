import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {PageSection} from '_components/Page/Page';
import Slideshow from '_components/Slideshow/Slideshow';

const showCaseHeight = 400;

const HomePage = props => {
  const {photos} = props;
  return (
    <div className="HomePage">
      <Slideshow photos={photos} showCaption={false} height={showCaseHeight} />
      <PageSection>
        <PageHeader><h1>This is the home page!</h1></PageHeader>
      </PageSection>
    </div>
  );
}

export default HomePage;