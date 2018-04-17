import React from 'react';
import {Grid, Row, Col, FormGroup, FormControl, Button, InputGroup} from 'react-bootstrap';
import cx from '_utilities/classnames';
import './ContactForm.scss';

const ContactForm = (props) => {
  return (
  <div className="ContactForm">
    <Grid>
      <Row>
        <FormGroup>
          <Col xs={12}>
            <h3 className="ContactForm-label">
              Name:
            </h3>
          </Col>
          <Col xs={6}>
            <FormControl id="customer-first" type="text" label="Name" placeholder="Type your name.. "/>
          </Col>
          <Col xs={6}>
            <FormControl id="customer-last" type="text" label="Last Name" placeholder="Type your last name.. "/>
          </Col>
          <Col xs={12}>
            <h3 className="ContactForm-label">
              Phone Number:
            </h3>
          </Col>
          <Col xs={6}>
            <FormControl id="customer-phonenumber" type="tel" label="Phone Number" placeholder="Type your phone number.. "/>
          </Col>
          <Col xs={12}>
            <h3 className="ContactForm-label">
              Email Address:
            </h3>
          </Col>
          <Col xs={12}>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl id="customer-email" type="text" label="Email" placeholder="Type your email address.. "/>
              </InputGroup>
          </Col>
          <Col xs={12}>
            <h3 className="ContactForm-label">
              Questions or concerns: 
            </h3>
          </Col>
          <Col xs={12}>
            <FormControl id="customer-message" componentClass="textarea" label="Message" placeholder="Type your message here..."/>
          </Col>
          <Col xs={12}>
            <div className="ContactForm-submitBtn">
              <Button type="submit">Submit</Button>
            </div>
          </Col>
        </FormGroup>
      </Row>
    </Grid>
  </div>
  );
}

export default ContactForm;