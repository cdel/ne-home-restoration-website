import React from 'react';
import PropTypes from 'prop-types';
import {PanelGroup, Panel, PageHeader} from 'react-bootstrap';

const FaqPage = ({faqs, title, description}) => {
  return (
    <div className="FaqPage">
      <PageHeader>{title}</PageHeader>
      <p>{description}</p>
      <div className="FaqPage-faqs">
        <PanelGroup accordion id="accordion-example">
          {faqs.map((faq, index) => (
            <Panel eventKey={`${index}`} key={faq.id}>
              <Panel.Heading>
                <Panel.Title toggle>
                  {faq.question}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                {faq.answer}
              </Panel.Body>
          </Panel>
          ))}
        </PanelGroup>
      </div>
    </div>
  );
}

export default FaqPage;