import React from 'react';
import useSWR from 'swr';
import AppCard from '../../components/AppCard';
import { Empty, ErrorMessage, Loading } from '../../components/Common';
import fetcher from '../../service/base-service';
import { MineCardParams } from '../../service/mine.model';
import { InviteCard } from './Card/index';

const Invite: React.FC = () => {
  const { data, error } = useSWR('/api/invite-list', fetcher.get);
  // console.log(data)
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

  return (
    <>
      {list.map((item: MineCardParams, i: number) => (
        <InviteCard data={item} key={i} onConfirm={handConfirm} onCancel={handleCancel} />
      ))}
    </>
  );
};

export default Invite;
