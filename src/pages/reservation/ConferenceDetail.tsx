import React, { useCallback } from 'react'
import { IonButton, IonContent, IonPage } from '@ionic/react'

import AppHeader from '../../components/AppHeader'
import AppInput from '../../components/AppInput'
import useInput from '../../hooks/useInput'

const Reservation: React.FC = () => {
  const title = useInput({
    label: '会议主题',
    required: true,
    characterSize: 20,
  });

  const content = useInput({
    label: '会议内容',
    type: 'textarea',
    characterSize: 500,
  });

  const files = useInput({
    label: '会议文件',
    type: 'file',
  });

  const members = useInput({
    label: '参会人员',
    required: true,
  });

  const recorder = useInput({
    label: '记录员',
    required: true,
  });

  const remind = useInput({
    label: '会议提醒',
    type: 'select',
  });

  function isDisabledButton() {
    return !title.value;
  }

  const submit = useCallback(() => {
    console.log('submitted');
  }, []);

  return (
    <IonPage className="Reservation">
      <AppHeader>共赢会议室</AppHeader>
      <IonContent className="ConferenceDetail">
        <div
          className="bgwrap"
          style={{
            backgroundImage: `url(${require('../room/images/room1.jpg')})`,
          }}
        >
          <div className="bg"></div>
        </div>

        <div className="main">
          <div className="app-card">
            <AppInput {...title} />
            <AppInput {...content} />
            <AppInput {...files} />
          </div>
          <div className="app-card">
            <AppInput {...members} />
            <AppInput {...recorder} />
            <AppInput {...remind} />
          </div>

          <IonButton className="app-button mt-5 mb-4 mx-3" expand="block" disabled={isDisabledButton()} onClick={submit}>
            完成
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Reservation;
