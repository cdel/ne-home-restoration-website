import React from 'react';
import PropTypes from 'prop-types';
import Image from '_components/Image/Image';
import {Grid, Col, Row} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';

const AboutPage = props => {
  return (
    <SectionCard title={props.title} icon="glyphicon glyphicon-home">
    <Grid>
      <Row>
        <Col xs={12}>
          <p>{props.description}</p>
        </Col> 
      </Row>
    </Grid>
  </SectionCard>
  );
}

export default AboutPage;