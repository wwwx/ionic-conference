import './Loading.scss'

import React from 'react'
import { IonContent, IonPage, IonSpinner } from '@ionic/react'

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
