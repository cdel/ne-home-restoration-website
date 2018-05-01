import React from 'react';
import PropTypes from 'prop-types';
import {SectionCard} from '_components/Page/Page';
import {Grid, Col, Row} from 'react-bootstrap';

const FinancingPage = props => {
  return (
    <SectionCard title="Financing" icon="glyphicon glyphicon-home">
    <Grid>
      <Row>
        <Col xs={12}>
          <p></p>
        </Col> 
      </Row>
    </Grid>
  </SectionCard>
  );
}

export default FinancingPage;