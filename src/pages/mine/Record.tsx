import React, { useEffect, useState } from 'react'
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'
import { useParams } from 'react-router'

import AppHeader from '../../components/AppHeader'
import RecordList from './RecordList'
import RecordPublish from './RecordPublish'
import { MineRouteParams } from '../../service/mine.model'

const Mine: React.FC = (props) => {
  const tabsConfig = [
    {
      label: '发布纪要',
      value: 'publish',
    },
    {
      label: '查看纪要',
      value: 'list',
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
      <AppHeader>会议纪要</AppHeader>
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
        {active === 'publish' && <RecordPublish />}
        {active === 'list' && <RecordList />}
      </IonContent>
    </IonPage>
  );
};

export default Mine;
