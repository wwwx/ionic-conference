import classnames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import AppCard from '../../../components/AppCard';
import './Card.scss';
import { CardProps } from './type';

const CardWrap = styled(AppCard)`
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`;

const Card: React.FC<CardProps> = ({ renderHead, renderBody, renderButtons, typeName, isHost }) => {
  return (
    <CardWrap className="Card">
      {typeName && <span className={classnames('Card__tag', isHost ? 'host' : 'participate')}>{typeName}</span>}

      {renderHead && <div className="Card__head border-bottom">{renderHead}</div>}

      <div className="Card__body">{renderBody}</div>
      <div className="Card__foot border-top">{renderButtons}</div>
    </CardWrap>
  );
};

export default Card;
