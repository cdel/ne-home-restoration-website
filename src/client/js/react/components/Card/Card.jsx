import React from 'react';
import PropTypes from 'prop-types';
import Image from '_components/Image/Image';
import cx from '_utilities/classnames';
import './Card.scss';

const Card = props => {
  const {children, image, description, withoutBorder} = props;
  return (
    <div className={cx("Card", {
      "Card--withoutBorder": withoutBorder
    })}>
      <div className="Card-image">
        {image}
      </div>
      <div className="Card-desc">
        {description}
        <div className="Card-iconLink">
          <span className="glyphicon glyphicon-arrow-right"></span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  withoutBorder: PropTypes.bool
};

Card.defaultProps = {
  withoutBorder: false
};

export default Card;