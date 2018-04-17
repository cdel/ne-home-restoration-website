import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {PageSection} from '_components/Page/Page';

const HomePage = props => {
  return (
    <PageSection>
      <PageHeader><h1>This is the home page!</h1></PageHeader>
    </PageSection>
  );
}

export default HomePage;