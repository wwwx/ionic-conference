import React from 'react'

import Card from './Card'
import { ICardProps } from './type'

const InviteCard: React.FC<ICardProps> = ({ data, onConfirm, onCancel }) => {
  return (
    <Card
      renderHead={<span className="_title">{data.title}</span>}
      renderBody={
        <ul className="ul">
          <li>
            <label>地点</label>
            <span>{data.address}</span>
          </li>
          <li>
            <label>时间</label>
            <span className="emphaise">{data.datetime}</span>
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
              <span>接受邀请</span>
            </button>
          )}

          {onCancel && (
            <button
              className="app-card__button cancel"
              onClick={() => onCancel()}
            >
              <span className=" border-left">残忍拒绝</span>
            </button>
          )}
        </>
      }
    />
  );
};

export default InviteCard;
