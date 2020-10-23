import dayjs from 'dayjs'
import React, { useState } from 'react'
import { IonContent, IonPage } from '@ionic/react'

import AppCard from '../../components/AppCard'
import AppHeader from '../../components/AppHeader'
import ScheduleList from './ScheduleList'
import Calendar, { toDateLocaleString } from '../../components/Calendar'

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
        <AppCard>
          <Calendar value={date} onChange={handleClick} />
        </AppCard>
        <div className="app-block-title fadeInUp">
          <span className="color-666 font-14">{toDateLocaleString(date)}</span>
        </div>

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
