import React, { useEffect, useRef, useState } from 'react'

import Staff from '../../../components/Staff'
import Card from './Card'
import { Role } from '../../../service/enum'
import { ICardProps } from './type'

const ConferenceProcessingCard: React.FC<ICardProps> = ({
  data,
  typeName,
  onConfirm,
}) => {
  const membersWrapRef = useRef(null);
  const [membetItemSize, setMemberItemSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (membersWrapRef.current) {
        const MEMBER_ITEM_WIDTH = 42 + 12;
        const membersWrapWidth = (membersWrapRef as any).current.offsetWidth;
        const size = Math.floor(membersWrapWidth / MEMBER_ITEM_WIDTH);
        console.log(membersWrapWidth, MEMBER_ITEM_WIDTH, size);
        setMemberItemSize(size + 2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setMemberItemSize]);

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
            <span ref={membersWrapRef}>
              <div className="members">
                <Staff
                  info={data.members.find((item) => item.role === Role.HOST)}
                />
                <Staff
                  info={data.members.find(
                    (item) => item.role === Role.RECORDED
                  )}
                />
              </div>

              <div className="members nowrap">
                {data.members.map((item, i) => {
                  if (item.role === Role.HOST || item.role === Role.RECORDED)
                    return null;
                  if (i > membetItemSize) {
                    // 超过第6个人不显示
                  } else if (i === membetItemSize) {
                    // 显示省略号
                    return (
                      <div className="Staff inline" key={i}>
                        <span>...</span>
                      </div>
                    );
                  } else {
                    return <Staff info={item} key={i} />;
                  }
                  return null;
                })}
              </div>
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
