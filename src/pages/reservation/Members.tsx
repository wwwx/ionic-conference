import classnames from 'classnames'
import React from 'react'
import useSWR from 'swr'
import { IonButton, IonContent, IonPage } from '@ionic/react'
import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'

import AppCard from '../../components/AppCard'
import fetcher from '../../service/base-service'
import { ErrorMessage, Loading, NoMore } from '../../components/Common'
import { MemberItem } from '../../service/mine.model'
import { getRoleName } from '../../utils/commonFunctions'

const MemberList: React.FC = () => {
  const { error, data } = useSWR('/api/participants', fetcher.get);
  if (error) return <ErrorMessage />;
  if (!data) return <Loading />;
  const members = data.data;
  // console.log(members);

  return (
    <>
      <AppCard>
        <div className="pb-3 border-bottom color-666 font-12">共27人，含10位外部人员</div>
        <div className="Members_list">
          {members.map((info: MemberItem, i: number) => {
            return (
              <div className="Members_item border-bottom py-3" key={i}>
                <div className="avatar"></div>
                <div className="info">
                  <div className="top">
                    <span className="name">{info.name}</span>
                  </div>
                  <div className="bottom">
                    <div className="dept">{info.dept}</div>
                    <span className={classnames('role', info.role)}>{getRoleName(info.role)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AppCard>
      <NoMore />
    </>
  );
};

const Members: React.FC = () => {
  function add() {
    console.log('add.');
  }
  return (
    <IonPage className="Members">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle className="text-center">参会人</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={add}>添加</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MemberList />
      </IonContent>
    </IonPage>
  );
};

export default Members;
