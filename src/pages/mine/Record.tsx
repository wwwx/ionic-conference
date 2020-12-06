import React, { lazy, Suspense, useEffect, useState } from 'react'
import { IonLabel, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react'
import { useParams } from 'react-router'

import { MineRouteParams } from '../../service/mine.model'

const RecordList = lazy(() => import('./RecordList'));
const RecordPublish = lazy(() => import('./RecordPublish'));

/**
 * 会议纪要
 *
 * @param {*} props
 * @return {*} 
 */
const Record: React.FC = (props) => {
  const tabsConfig = [
    {
      label: '发布纪要',
      value: 'publish',
      view: RecordPublish,
    },
    {
      label: '查看纪要',
      value: 'list',
      view: RecordList,
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
    <>
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
    </>
  );
};

export default Record;
