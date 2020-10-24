import { IonContent, IonPage } from '@ionic/react';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import AppBlockTitle from '../../components/AppBlockTitle';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import Calendar, { toDateLocaleString } from '../../components/Calendar';
import ScheduleList from './ScheduleList';

const MySchedule: React.FC = () => {
  const DATE_FORMAT = 'YYYY/MM/DD';
  const today = new Date(dayjs().format(DATE_FORMAT)).getTime();
  const [date, setDate] = useState(today);

  function handleClick(value: number) {
    setDate(value);
  }

  return (
    <IonPage className="MySchedule">
      <AppHeader>我的日程</AppHeader>
      <IonContent>
        <AppCard>
          <Calendar value={date} onChange={handleClick} />
        </AppCard>
        <AppBlockTitle subtitle={toDateLocaleString(date)}></AppBlockTitle>
        <AppCard>
          <ScheduleList date={date} />
        </AppCard>
        {/* 空标签 用来增加底部空白空间 */}
        <div className="pb-3"></div>
      </IonContent>
    </IonPage>
  );
};

export default MySchedule;
