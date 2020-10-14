import React from 'react';
import useSWR from 'swr';
import ConferenceHasNotStartCard from './Card/ConferenceHasNotStartCard';
import ConferenceFinishedCard from './Card/ConferenceFinishedCard';
import fetcher from '../../service/base-service';
import { Empty, ErrorMessage, Loading } from '../../components/Common';
import { MineCardParams } from '../../service/mine.model';
import { ConferenceType } from '../../service/enum';

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

  return list.map((item: MineCardParams, i: number) => {
    switch (item.type) {
      case ConferenceType.FINISHED:
        return (
          <ConferenceFinishedCard
            data={item}
            key={i}
            typeName="主持"
            onConfirm={handConfirm}
          />
        );
      case ConferenceType.HAS_NOT_START:
        if (item.isHost) {
          return (
            <ConferenceHasNotStartCard
              data={item}
              key={i}
              typeName="主持"
              onConfirm={handConfirm}
              onCancel={handleCancel}
            />
          );
        } else {
          return (
            <ConferenceHasNotStartCard
              data={item}
              key={i}
              typeName="参与"
              onConfirm={handConfirm}
            />
          );
        }
      case 3:
    }
    return null;
  });
};

export default Conference;
