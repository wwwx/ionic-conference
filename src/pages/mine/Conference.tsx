import React from 'react'
import useSWR from 'swr'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import fetcher from '../../service/base-service'
import { ConferenceHasNotStartCard } from './Card/index'
import { ConferenceFinishedCard } from './Card/index'
import { Empty, ErrorMessage, Loading } from '../../components/Common'
import { MineCardParams } from '../../service/mine.model'
import { ConferenceType } from '../../service/enum'

// import 'react-tabs/style/react-tabs.css'

const Conference: React.FC = () => {
  const { data, error } = useSWR('/api/conference-list', fetcher.get);
  // console.log(data)
  if (error) return <ErrorMessage />;
  if (!data) return <Loading />;

  const list = data.data;

  if (!list)
    return (
      <div className="app-card">
        <Empty />
      </div>
    );

  function handConfirm() {
    console.log('confirm');
  }

  function handleCancel() {
    console.log('cancel');
  }

  const finishedData = list.filter(
    (item: any) => item.type === ConferenceType.FINISHED
  );

  const hasNotStartData = list.filter(
    (item: any) => item.type === ConferenceType.HAS_NOT_START
  );

  return (
    <Tabs className="Mine-Conference">
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
          return (
            <ConferenceHasNotStartCard
              data={item}
              key={i}
              typeName={typeName}
              {...actionProps}
            />
          );
        })}
      </TabPanel>
      <TabPanel>
        <div className="app-card">.....</div>
      </TabPanel>
      <TabPanel>
        {finishedData.map((item: MineCardParams, i: number) => {
          const typeName = item.isHost ? '主持' : '参与';
          return (
            <ConferenceFinishedCard
              data={item}
              key={i}
              typeName={typeName}
              onConfirm={handConfirm}
            />
          );
        })}
      </TabPanel>
    </Tabs>
  );
};

export default Conference;
