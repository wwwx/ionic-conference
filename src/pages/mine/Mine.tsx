import React, { useEffect, useState } from 'react'
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'
import { useParams } from 'react-router'

import AppHeader from '../../components/AppHeader'
import Conference from './Conference'
import Invite from './Invite'
import { MineRouteParams } from '../../service/mine.model'

const Mine: React.FC = (props) => {
  const tabsConfig = [
    {
      label: '会议邀请',
      value: 'invite',
    },
    {
      label: '我的会议',
      value: 'conference',
    },
  ];
  // eslint-disable-next-line
  const [active, setActive] = useState(tabsConfig[0].value);

  const handleTabsChange = (tabName: string) => {
    setActive(tabName);
  };

  const { type } = useParams<MineRouteParams>();
  useEffect(() => {
    setActive(type);
  }, [type]);

  return (
    <IonPage className="Reservation">
      <AppHeader>我的会议</AppHeader>
      <IonContent>
        <IonToolbar>
          <IonSegment
            mode="md"
            value={active}
            onIonChange={(e: any) => handleTabsChange(e.detail.value)}
          >
            {tabsConfig.map((tab) => (
              <IonSegmentButton key={tab.value} value={tab.value}>
                <IonLabel>{tab.label}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
        {active === 'invite' && <Invite />}
        {active === 'conference' && <Conference />}
      </IonContent>
    </IonPage>
  );
};

export default Mine;
