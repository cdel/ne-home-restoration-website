import React from 'react';
import PropTypes from 'prop-types';
import {PageSection} from '_components/Page/Page';
import {PanelGroup, Panel, PageHeader} from 'react-bootstrap';
import './Faq.scss';

const FaqPage = ({faqs, title, description}) => {
  return (
    <PageSection>
      <PageHeader><p>{title} <span className="glyphicon glyphicon-question-sign"></span></p></PageHeader>
      <p className="FaqPage-description">{description}</p>
      <div className="FaqPage-faqs">
        <PanelGroup accordion id="accordion-example">
          {faqs.map((faq, index) => (
            <Panel eventKey={`${index}`} key={faq.id}>
              <Panel.Heading>
                <Panel.Title toggle>
                  <span className="FaqPage-panel-title">
                    {faq.question}
                  </span>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <p className="FaqPage-panel-content">
                  {faq.answer}
                </p>
              </Panel.Body>
          </Panel>
          ))}
        </PanelGroup>
      </div>
    </PageSection>
  );
}

export default FaqPage;