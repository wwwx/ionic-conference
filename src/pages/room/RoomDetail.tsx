import dayjs from 'dayjs'
import React, { useState } from 'react'
import { IonContent, IonPage, IonSlide, IonSlides } from '@ionic/react'

import AppHeader from '../../components/AppHeader'
import { toDateLocaleString } from '../../components/Calendar'
import { TimeList } from '../../components/TimePicker'

type RoomDetailItemProps = {
  content: string;
};

function RoomDetailItem(props: RoomDetailItemProps) {
  return (
    <div className="RoomDetailItem color-333 font-14 mb-3">
      <i className="icon"></i>
      <span>{props.content}</span>
    </div>
  );
}

function Carousel() {
  const roomList = [
    {
      imgUrl: require('./images/room3.jpg'),
    },
  ];
  const slideOpts = {
    initialSlide: 1,
    // speed: 400,
    autoplay: {
      delay: 3000,
    },
  };
  const RoomStyle = {
    width: '100%',
    height: '120px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <IonSlides pager={true} options={slideOpts}>
      {roomList.map((room, i) => {
        return (
          <IonSlide key={i}>
            <div
              style={{ ...RoomStyle, backgroundImage: `url(${room.imgUrl})` }}
            ></div>
          </IonSlide>
        );
      })}
    </IonSlides>
  );
}

const RoomDetail: React.FC = () => {
  const [time, setTime] = useState<number[]>([1, 2, 3]);
  const DATE_FORMAT = 'YYYY/MM/DD';
  const date = new Date(dayjs().format(DATE_FORMAT)).getTime();

  return (
    <IonPage className="RoomDetail">
      <AppHeader>共赢会议室</AppHeader>
      <IonContent>
        <div className="carousel-wrap rounded m-3">
          <Carousel />
        </div>

        <div className="app-block-title">
          <span className="color-111 font-weight-bold">共赢会议室</span>
        </div>
        <div className="app-card">
          <RoomDetailItem content="由由职场1号楼18F" />
          <RoomDetailItem content="电视机、白板、视频、话筒" />
          <RoomDetailItem content="最多可容纳20人" />
          <RoomDetailItem content="访客请链接“niwodai_guest”按提示完成注册" />
        </div>

        <div className="app-block-title">
          <span className="color-111 font-weight-bold">会议室预定详情</span>
          <span className="color-666 font-14">{toDateLocaleString(date)}</span>
        </div>
        <div className="app-card">
          <TimeList {...{ time, setTime }} readonly />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RoomDetail;
