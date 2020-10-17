import useSWR from 'swr'
import React, { useEffect, useState } from 'react'

import fetcher from '../../service/base-service'
import { Empty, ErrorMessage, Loading } from '../../components/Common'
import { RecordType } from '../../service/enum'
import { MineCardParams, RecordParams } from '../../service/mine.model'
import { RecordPublishedCard } from './Card/index'

const Invite: React.FC = () => {
  const [publishedList, setPublishedList] = useState<RecordParams[]>([]);
  const { data, error } = useSWR('/api/record-list', fetcher.get);
  // console.log(data)

  useEffect(() => {
    if (data && data.data) {
      const list = data.data as MineCardParams[];
      setPublishedList(
        list.filter((item) => item.type === RecordType.PUBLISHED)
      );
    }
  }, [data]);

  if (error) return <ErrorMessage />;
  if (!data) return <Loading />;

  if (!data)
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

  return (
    <>
      {publishedList.map((item: MineCardParams, i: number) => {
        const typeName = item.isHost ? '主持' : '参与';
        return (
          <RecordPublishedCard
            data={item}
            key={i}
            typeName={typeName}
            onConfirm={handConfirm}
            onCancel={handleCancel}
          />
        );
      })}
    </>
  );
};

export default Invite;
