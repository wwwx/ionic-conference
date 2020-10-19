import React, { useEffect } from 'react'
import { IonButton, IonContent, IonPage } from '@ionic/react'

import AppHeader from '../../components/AppHeader'
import AppInput from '../../components/AppInput'
import useInput from '../../hooks/useInput'

const Reservation: React.FC = () => {
  const title = useInput({ initValue: '', errorMessage: '标题不能为空', validator: (value) => value.trim() === '' });
  const wrapStyle = {
    // width: '100%',
    // height: '120px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  function submit() {
    title.validate();
  }

  useEffect(() => {
    // http.get('/api/test').then(res => {
    //     console.log(res)
    // })
  }, []);

  return (
    <IonPage className="Reservation">
      <AppHeader>共赢会议室</AppHeader>
      <IonContent className="ConferenceDetail">
        <div
          className="bgwrap"
          style={{
            ...wrapStyle,
            backgroundImage: `url(${require('../room/images/room1.jpg')})`,
          }}
        >
          <div className="bg"></div>
        </div>

        <div className="main">
          <div className="app-card">
            <label className="card-title required">会议主题</label>
            <div className="mt-3"></div>
            <AppInput {...title} />
          </div>

          <IonButton className="app-button mt-5 mb-4 mx-3" expand="block" onClick={submit}>
            完成
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Reservation;
