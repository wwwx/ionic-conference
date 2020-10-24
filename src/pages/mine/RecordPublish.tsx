import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useSWR from 'swr';
import AppCard from '../../components/AppCard';
import { Empty, ErrorMessage, Loading } from '../../components/Common';
import fetcher from '../../service/base-service';
import { RecordType } from '../../service/enum';
import { RecordParams } from '../../service/mine.model';
import { RecordHasNotPublishCard, RecordProcessingCard } from './Card/index';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';

const Conference: React.FC = () => {
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState(0);
  const { data, error } = useSWR('/api/record-list', fetcher.get);
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
    history.push('/record-detail');
  }

  function handleCancel() {
    console.log('cancel');
  }

  const hasNotStartData = list.filter((item: RecordParams) => item.type === RecordType.HAS_NOT_START);

  const processingData = list.filter((item: RecordParams) => item.type === RecordType.PROCESSING);

  return (
    <Tabs className="Mine-Conference" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>未开始</Tab>
        <Tab>进行中</Tab>
      </TabList>
      <TabPanel>
        {hasNotStartData.map((item: RecordParams, i: number) => {
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
          return <RecordHasNotPublishCard data={item} key={i} typeName={typeName} {...actionProps} />;
        })}
      </TabPanel>
      <TabPanel>
        {processingData.map((item: RecordParams, i: number) => {
          // const typeName = item.isHost ? '主持' : '参与';
          return <RecordProcessingCard data={item} key={i} onConfirm={handConfirm} />;
        })}
      </TabPanel>
    </Tabs>
  );
};

export default Conference;
