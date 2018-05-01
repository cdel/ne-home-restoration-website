import React from 'react';
import PropTypes from 'prop-types';
import Image from '_components/Image/Image';
import ContactForm from '_components/ContactForm/ContactForm';
import {Grid, Col, Row} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';

const ContactPage = props => {
  return (
    <SectionCard title={props.title} icon="glyphicon glyphicon-envelope">
    <Grid>
      <Row>
        <Col xs={12} lg={6}>
          <ContactForm />
        </Col>
        <Col xs={12} lg={6}>
          <p>{props.description}</p>
          <Image src="assets/boston-map.png" />
        </Col>  
      </Row>
    </Grid>
  </SectionCard>
  );
}

export default ContactPage;