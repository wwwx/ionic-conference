import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import classnames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import AppCard from '../../components/AppCard';
import { ErrorMessage, Loading, NoMore } from '../../components/Common';
import fetcher from '../../service/base-service';
import { MemberItem } from '../../service/mine.model';
import { getRoleName } from '../../utils/commonFunctions';

const MemberListWrap = styled(AppCard)`
  ._item {
    display: flex;

    &.inline {
      display: inline-block;
      height: 42px;
    }

    .avatar {
      flex: 0 0 42px;
      width: 42px;
      height: 42px;
      background-color: #cccccc;
      background-image: url('/images/avatar.jpeg');
      background-size: cover;
      background-position: center;
      border-radius: 2px;
      margin-right: 12px;
    }

    .info {
      flex: 1 1 0%;

      .top {
        display: flex;
        margin-bottom: 8px;

        .name {
          font-weight: bold;
          margin-right: 12px;
          color: #333333;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .role {
          border-radius: 2px;
          padding: 1px 0.5rem;
          color: #676767;
          font-size: 12px;
        }

        .dept {
          color: #676767;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
        }
      }
    }
  }
`;

const MemberList: React.FC = () => {
  const { error, data } = useSWR('/api/participants', fetcher.get);
  if (error) return <ErrorMessage />;
  if (!data) return <Loading />;
  const members = data.data;
  // console.log(members);

  return (
    <>
      <MemberListWrap>
        <div className="pb-3 border-bottom color-666 font-12">共27人，含10位外部人员</div>
        <div>
          {members.map((info: MemberItem, i: number) => {
            return (
              <div className="_item border-bottom py-3" key={i}>
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
      </MemberListWrap>
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
