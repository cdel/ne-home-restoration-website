import React from 'react';
import PropTypes from 'prop-types';
import {PageSection} from '_components/Page/Page';
import {PanelGroup, Panel, PageHeader} from 'react-bootstrap';

const FaqPage = ({faqs, title, description}) => {
  return (
    <PageSection>
      <PageHeader><p>{title} <span className="glyphicon glyphicon-question-sign"></span></p></PageHeader>
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
    </PageSection>
  );
}

export default FaqPage;