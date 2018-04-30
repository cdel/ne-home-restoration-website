import React from 'react';
import PropTypes from 'prop-types';
import Image from '_components/Image/Image';
import {Grid, Col, Row} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';

const PMPage = props => {
  return (
    <SectionCard title={props.title} icon="glyphicon glyphicon-list">
      <Grid>
        <Row>
          <Col xs={12}>
            <p>{props.description}</p>
          </Col> 
          <Col xs={12} sm={6}>
            <Image src={props.videoSrc} />
          </Col>
          <Col xs={12} sm={6}>
            <p></p>
          </Col>
        </Row>
      </Grid>
    </SectionCard>
  );
}

export default PMPage;