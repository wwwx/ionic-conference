import React, { lazy, Suspense, useEffect, useState } from 'react'
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'
import { useParams } from 'react-router'

import AppHeader from '../../components/AppHeader'
import { MineRouteParams } from '../../service/mine.model'

const Conference = lazy(() => import('./MyConference'));
const Invite = lazy(() => import('./MyInvite'));

const Mine: React.FC = (props) => {
  const tabsConfig = [
    {
      label: '会议邀请',
      value: 'invite',
      view: Invite,
    },
    {
      label: '我的会议',
      value: 'conference',
      view: Conference,
    },
    // {
    //   label: '我的会议2',
    //   value: 'conference2',
    //   view: Invite,
    // },
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
        <Suspense fallback={<div />}>
          {tabsConfig.map((tab, i) => {
            return active === tab.value ? <tab.view key={i} /> : null;
          })}
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

export default Mine;
