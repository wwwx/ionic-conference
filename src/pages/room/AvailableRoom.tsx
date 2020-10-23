import React from 'react'
import styled from 'styled-components'
import { IonButton, IonChip, IonContent, IonPage } from '@ionic/react'
import { useHistory } from 'react-router'

import AppCard from '../../components/AppCard'
import AppHeader from '../../components/AppHeader'
import { NoMore } from '../../components/Common'

const Button = styled(IonButton)`
  --border-radius: 24px;
  height: 3rem;
  font-size: 1rem;
  flex: 1;
`;

const RoomItem = styled(AppCard)`
  display: flex;
  padding: 0.75rem;

  .left {
    flex: 0 0 28%;
    align-self: stretch;
    background-color: #f2f2f2;
  }

  .right {
    flex: 1;
    margin-left: 0.75rem;
    overflow: hidden;
  }

  .people-num {
    flex: 0 0 40px;
    text-align: right;
    color: var(--ion-color-primary);
  }

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .devices {
    ion-chip {
      border-radius: 8px;
      padding: 2px 12px;
      height: 24px;
    }
  }
`;

const Item: React.FC = () => {
  const history = useHistory();

  function handleDetailClick() {
    history.push('/room-detail');
  }

  function booking() {
    history.push('/conference-detail/create');
  }

  return (
    <RoomItem>
      <div className="left rounded"></div>
      <div className="right">
        <div className="d-flex justify-content-between mb-3">
          <span className="title text-truncate">共赢会议室</span>
          <span className="people-num">12人</span>
        </div>
        <div className="mb-3">
          <div className="color-666 mb-2">由由职场2号楼18F</div>
          <div className="devices">
            <IonChip color="primary">白板</IonChip>
            <IonChip color="primary">视频</IonChip>
            <IonChip color="primary">话筒</IonChip>
          </div>
        </div>

        <div className="d-flex">
          <Button fill="outline" className="mr-2" onClick={handleDetailClick}>
            查看详情
          </Button>
          <Button onClick={booking}>预定</Button>
        </div>
      </div>
    </RoomItem>
  );
};

const AvailableRoom: React.FC = () => {
  return (
    <IonPage className="AvailableRoom">
      <AppHeader> 可用会议室</AppHeader>
      <IonContent>
        {[0, 0, 0, 0, 0, 0, 0].map((_, i) => (
          <Item key={i} />
        ))}

        <NoMore />
      </IonContent>
    </IonPage>
  );
};

export default AvailableRoom;
