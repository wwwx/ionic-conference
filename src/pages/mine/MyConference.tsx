import React, { useState } from 'react';
import useSWR from 'swr';
import AppCard from '../../components/AppCard';
import { Empty, ErrorMessage, Loading } from '../../components/Common';
import fetcher from '../../service/base-service';
import { ConferenceType } from '../../service/enum';
import { MineCardParams } from '../../service/mine.model';
import { ConferenceFinishedCard, ConferenceHasNotStartCard, ConferenceProcessingCard } from './Card/index';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';

// import 'react-tabs/style/react-tabs.css'

const Conference: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { data, error } = useSWR('/api/conference-list', fetcher.get);
  if (error) return <ErrorMessage />;
  if (!data) return <Loading />;

  const list = data.data;

  if (!list)
    return (
      <AppCard>
        <Empty />
      </AppCard>
    );

  function handConfirm() {
    console.log('confirm');
  }

  function handleCancel() {
    console.log('cancel');
  }

  const finishedData = list.filter((item: MineCardParams) => item.type === ConferenceType.FINISHED);

  const hasNotStartData = list.filter((item: MineCardParams) => item.type === ConferenceType.HAS_NOT_START);

  const processingData = list.filter((item: MineCardParams) => item.type === ConferenceType.PROCESSING);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>未开始</Tab>
        <Tab>进行中</Tab>
        <Tab>已结束</Tab>
      </TabList>
      <TabPanel>
        {hasNotStartData.map((item: MineCardParams, i: number) => {
          const typeName = item.isHost ? '主持' : '参与';

          let actionProps: any = {
            onConfirm: handConfirm,
          };

          if (!item.isHost) {
            actionProps = {
              ...actionProps,
              onCancel: handleCancel,
            };
          }
          return <ConferenceHasNotStartCard data={item} key={i} typeName={typeName} {...actionProps} />;
        })}
      </TabPanel>
      <TabPanel>
        {processingData.map((item: MineCardParams, i: number) => {
          // const typeName = item.isHost ? '主持' : '参与';
          return <ConferenceProcessingCard data={item} key={i} onConfirm={handConfirm} />;
        })}
      </TabPanel>
      <TabPanel>
        {finishedData.map((item: MineCardParams, i: number) => {
          const typeName = item.isHost ? '主持' : '参与';
          return <ConferenceFinishedCard data={item} key={i} typeName={typeName} onConfirm={handConfirm} />;
        })}
      </TabPanel>
    </Tabs>
  );
};

export default Conference;
