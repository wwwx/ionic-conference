import classnames from 'classnames'
import React from 'react'

import { CardProps } from './type'

const Card: React.FC<CardProps> = ({
  renderHead,
  renderBody,
  renderButtons,
  typeName,
  isHost,
}) => {
  return (
    <div className="Card app-card">
      {typeName && (
        <span
          className={classnames(
            'app-card__tag',
            isHost ? 'host' : 'participate'
          )}
        >
          {typeName}
        </span>
      )}

      {renderHead && (
        <div className="app-card__head border-bottom">{renderHead}</div>
      )}

      <div className="app-card__body">{renderBody}</div>
      <div className="app-card__foot border-top">{renderButtons}</div>
    </div>
  );
};

export default Card;
