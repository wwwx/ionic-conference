import React from 'react'
import { IonContent, IonPage } from '@ionic/react'

import AppButton from '../../components/AppButton'
import AppCard from '../../components/AppCard'
import AppHeader from '../../components/AppHeader'

const RecordDetail: React.FC = () => {
  return (
    <IonPage className="RecordDetail">
      <AppHeader>纪要详情</AppHeader>
      <IonContent>
        <AppCard>
          <h3>Hello world;</h3>
          <AppButton>click</AppButton>
        </AppCard>
      </IonContent>
    </IonPage>
  );
};

export default RecordDetail;
