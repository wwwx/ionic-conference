import { IonButton, IonChip, IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import AppHeader from '../../components/AppHeader';

const AvailableRoom: React.FC = () => {
  return (
    <IonPage className="AvailableRoom">
      <AppHeader> 可用会议室</AppHeader>
      <IonContent>
        {[0, 0, 0, 0, 0, 0, 0].map((_, i) => (
          <Item key={i} />
        ))}

        <div className="mt-5 mb-4 color-ccc font-12 text-center">
          没有更多了
        </div>
      </IonContent>
    </IonPage>
  );
};

const Item: React.FC = () => {
  const history = useHistory();

  function handleDetailClick() {
    history.push('/room-detail');
  }

  function booking() {}

  return (
    <div className="app-card d-flex">
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
          <IonButton
            fill="outline"
            className="app-button"
            onClick={handleDetailClick}
          >
            查看详情
          </IonButton>
          <IonButton className="app-button ml-2" onClick={booking}>
            预定
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoom;
