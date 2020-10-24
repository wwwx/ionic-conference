import dayjs from 'dayjs';
import React from 'react';
import AppBlockTitle from '../../components/AppBlockTitle';
import AppCard from '../../components/AppCard';
import { toDateLocaleString } from '../../components/Calendar';
import ScheduleList from './ScheduleList';

const Schedule: React.FC = () => {
  const DATE_FORMAT = 'YYYY/MM/DD';
  const date = new Date(dayjs().format(DATE_FORMAT)).getTime();

  return (
    <React.Fragment>
      <AppBlockTitle subtitle={toDateLocaleString(date)}>今日日程</AppBlockTitle>
      <AppCard style={{ minHeight: '120px' }}>
        <ScheduleList date={date} />
      </AppCard>
    </React.Fragment>
  );
};

export default Schedule;
