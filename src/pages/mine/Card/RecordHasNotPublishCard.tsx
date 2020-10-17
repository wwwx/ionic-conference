import React from 'react'

import Card from './Card'
import { ICardProps } from './type'

const RecordCard: React.FC<ICardProps> = ({ data, typeName, onConfirm }) => {
  return (
    <Card
      typeName={typeName}
      isHost={data.isHost}
      renderHead={<span className="_title">{data.title}</span>}
      renderBody={
        <ul className="ul">
          <li>
            <label>时间</label>
            <span className="emphaise">{data.datetime}</span>
          </li>
          <li>
            <label>地点</label>
            <span>{data.address}</span>
          </li>
          <li>
            <label>主持人</label>
            <span>{data.host}</span>
          </li>
        </ul>
      }
      renderButtons={
        <>
          {onConfirm && (
            <button
              className="app-card__button confirm"
              onClick={() => onConfirm()}
            >
              <span>查看详情</span>
            </button>
          )}
        </>
      }
    />
  );
};

export default RecordCard;
