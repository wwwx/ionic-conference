import { IonContent, IonPage, IonSlide, IonSlides } from '@ionic/react';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import styled from 'styled-components';
import AppBlockTitle from '../../components/AppBlockTitle';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import { toDateLocaleString } from '../../components/Calendar';
import { TimeList } from '../../components/TimePicker';

const CarsouelWrap = styled.div`
  overflow: hidden;

  .swiper-pagination-bullet {
    border-radius: 0;
    width: 10px;
    height: 2px;
  }
`;

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
    <CarsouelWrap>
      <IonSlides pager={true} options={slideOpts}>
        {roomList.map((room, i) => {
          return (
            <IonSlide key={i}>
              <div style={{ ...RoomStyle, backgroundImage: `url(${room.imgUrl})` }}></div>
            </IonSlide>
          );
        })}
      </IonSlides>
    </CarsouelWrap>
  );
}

const RoomDetailItemWrap = styled.div`
  display: flex;
  align-items: center;
  color: #333333;
  margin-bottom: 1rem;
  font-size: 14px;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #cccccc;
    margin-right: 0.5rem;
    border-radius: 4px;
  }
`;

type RoomDetailItemProps = {
  content: string;
};

function RoomDetailItem(props: RoomDetailItemProps) {
  return (
    <RoomDetailItemWrap>
      <i className="icon"></i>
      <span>{props.content}</span>
    </RoomDetailItemWrap>
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
        <AppBlockTitle>共赢会议室</AppBlockTitle>
        <AppCard>
          <RoomDetailItem content="由由职场1号楼18F" />
          <RoomDetailItem content="电视机、白板、视频、话筒" />
          <RoomDetailItem content="最多可容纳20人" />
          <RoomDetailItem content="访客请链接“niwodai_guest”按提示完成注册" />
        </AppCard>
        <AppBlockTitle subtitle={toDateLocaleString(date)}>会议室预定详情</AppBlockTitle>
        <AppCard>
          <TimeList {...{ time, setTime }} readonly />
        </AppCard>
      </IonContent>
    </IonPage>
  );
};

export default RoomDetail;
