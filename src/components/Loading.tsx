import { IonContent, IonPage, IonSpinner } from '@ionic/react';
import React from 'react';
import './Loading.scss';

const Loading: React.FC = () => {
  return (
    <IonPage className="Loading">
      <IonContent>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <IonSpinner name="dots"></IonSpinner>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Loading;
