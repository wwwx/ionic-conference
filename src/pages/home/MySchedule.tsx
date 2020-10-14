import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Calendar, { toDateLocaleString } from '../../components/Calendar';
import AppHeader from '../../components/AppHeader';
import ScheduleList from './ScheduleList';
import dayjs from 'dayjs';

const MySchedule: React.FC = () => {
  const DATE_FORMAT = 'YYYY/MM/DD';
  const today = new Date(dayjs().format(DATE_FORMAT)).getTime();
  const [date, setDate] = useState(today);
  // const [list, setList] = useState<ListRecord[]>([])

  function handleClick(value: number) {
    setDate(value);
  }

  return (
    <IonPage className="MySchedule">
      <AppHeader>我的日程</AppHeader>
      <IonContent>
        <div className="app-card">
          <Calendar value={date} onChange={handleClick} />
        </div>
        <div className="app-block-title fadeInUp">
          <span className="color-666 font-14">{toDateLocaleString(date)}</span>
        </div>

        <div className="app-card">
          <ScheduleList date={date} />
        </div>

        {/* 空标签 用来增加底部空白空间 */}
        <div className="pb-3"></div>
      </IonContent>
    </IonPage>
  );
};

export default MySchedule;
