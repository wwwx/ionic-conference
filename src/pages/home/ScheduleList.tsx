import React from 'react'
import useSWR from 'swr'
import { IonAvatar, IonButton } from '@ionic/react'

import fetcher from '../../service/base-service'
import { Empty, ErrorMessage, Loading } from '../../components/Common'

type ScheduleParams = {
  status: number;
  type: string;
  content: string;
};

type ScheduleItemProps = {
  data: ScheduleParams;
  style: { [key: string]: string };
};

function getStatusOptions(status: number) {
  switch (status) {
    case 1:
      return {
        color: 'primary',
        title: '进行中',
      };
    case 2:
      return {
        color: 'warning',
        title: '未开始',
      };
    case 3:
      return {
        color: 'medium',
        title: '已结束',
      };
    default:
      return {};
  }
}

const ScheduleItem: React.FC<ScheduleItemProps> = (props) => {
  const options = {
    ...props.data,
    ...getStatusOptions(props.data.status),
  };
  return (
    <div className="item mb-3 border-bottom pb-3 fadeInUp" style={props.style}>
      <div className="top d-flex align-items-center mb-1">
        <IonButton color={options.color} size="small" className="m-0">
          <IonAvatar>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVQ4T+2TUQ6AMAhD25u5kxlP5m5Wg6kfJptuzi8jv9AXKEAMBmt6SROA2fmFZC7V3gFWi9JHAJKOkUAyxXhdHhgQ5gZg174HkCQ7nqM9r/G0hcsOfgAw7MHTp6zeQStwA8/igxEfLWE4AAAAAElFTkSuQmCC"
              alt=""
            />
          </IonAvatar>
          <span className="font-12">{options.title}</span>
        </IonButton>
        <span className="ml-1 font-12 color-666">14:30~15:00</span>
      </div>
      <div className="bottom d-flex justify-content-between">
        <span className="meetingType color-333 font-14">{options.type}</span>
        <span className="meetingContent color-333 flex-grow-1 font-14">{options.content}</span>
        <span className="meetingViewButton color-666 font-12">查看详情</span>
      </div>
    </div>
  );
};

type ScheduleListProps = {
  date: number;
};

const ScheduleList: React.FC<ScheduleListProps> = (props) => {
  const { data, error } = useSWR(`/api/my-schedule?date=${props.date}`, fetcher.get);
  // console.log(isLoading, data)
  if (error) return <ErrorMessage />;

  if (!data) return <Loading />;

  const listData: any = data.data;
  if (!listData) return <Empty />;

  return (
    <div className="Schedule">
      {listData.map((_: ScheduleParams, i: number) => (
        <ScheduleItem
          data={_}
          style={{
            animationDelay: `${(i + 1) * 200}ms`,
          }}
          key={i}
        />
      ))}
    </div>
  );
};

export default ScheduleList;
