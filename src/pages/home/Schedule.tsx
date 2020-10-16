import dayjs from 'dayjs'
import React from 'react'

import ScheduleList from './ScheduleList'
import { toDateLocaleString } from '../../components/Calendar'

const Schedule: React.FC = () => {
  const DATE_FORMAT = 'YYYY/MM/DD';
  const date = new Date(dayjs().format(DATE_FORMAT)).getTime();

  return (
    <React.Fragment>
      <div className="app-block-title fadeInUp">
        <span className="color-111 font-weight-bold">会议日程</span>
        <span className="color-666 font-14">{toDateLocaleString(date)}</span>
      </div>
      <div className="app-card">
        <ScheduleList date={date} />
      </div>
    </React.Fragment>
  );
};

export default Schedule;
