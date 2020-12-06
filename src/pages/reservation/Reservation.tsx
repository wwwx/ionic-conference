import React, { useEffect, useState } from 'react'
import { IonLabel, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'

import AppBackHome from '../../components/AppBackHome'
import SearchByAddress from './SearchByAddress'
import SearchByTime from './SearchByTime'

// import http from '../../utils/http'

/**
 * 会议预定
 *
 * @return {*} 
 */
const Reservation: React.FC = () => {
  const tabsConfig = [
    {
      label: '按时间查询',
      value: 'time',
    },
    {
      label: '按会议地址查询',
      value: 'address',
    },
  ];
  // eslint-disable-next-line
  const [active, setActive] = useState(tabsConfig[0].value);

  const handleTabsChange = (tabName: string) => {
    setActive(tabName);
  };

  useEffect(() => {
    // http.get('/api/test').then(res => {
    //     console.log(res)
    // })
  }, []);

  return (
    <>
      <IonToolbar>
        <IonSegment mode="md" value={active} onIonChange={(e: any) => handleTabsChange(e.detail.value)}>
          {tabsConfig.map((tab) => (
            <IonSegmentButton key={tab.value} value={tab.value}>
              <IonLabel>{tab.label}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonToolbar>
      {active === 'time' && <SearchByTime />}
      {active === 'address' && <SearchByAddress />}
      <AppBackHome />
    </>
  );
};

export default Reservation;
