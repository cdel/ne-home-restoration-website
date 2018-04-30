import React from 'react';
import PropTypes from 'prop-types';
import Image from '_components/Image/Image';
import cx from '_utilities/classnames';
import './Card.scss';

const Card = props => {
  const {children, image, description, withoutBorder, target} = props;
  const WrapperElement = target ? 'a' : 'div'
  return (
    <WrapperElement className={cx("Card", {
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
    </WrapperElement>
  );
}

Card.propTypes = {
  withoutBorder: PropTypes.bool,
  target: PropTypes.string,
};

Card.defaultProps = {
  target: '',
  withoutBorder: false
};

export default Card;