import React from 'react'

import Staff from '../../../components/Staff'
import Card from './Card'
import { Role } from '../../../service/enum'
import { ICardProps } from './type'

const ConferenceProcessingCard: React.FC<ICardProps> = ({
  data,
  typeName,
  onConfirm,
}) => {
  return (
    <Card
      typeName={typeName}
      isHost={data.isHost}
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
            <label>会议内容</label>
            <span className="line-clamp">{data.content}</span>
          </li>
          <li>
            <label>会议文件</label>
            <span className="emphaise">附件1</span>
          </li>
          <li>
            <label>会议人员</label>
            <span>
              <Staff role={Role.HOST} />
              <Staff role={Role.RECORDED} />
            </span>
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
              <span>查看会议纪要</span>
            </button>
          )}
        </>
      }
    />
  );
};

export default ConferenceProcessingCard;
