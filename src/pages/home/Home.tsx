import { IonContent, IonPage } from '@ionic/react';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import AppHeader from '../../components/AppHeader';

const Profile = lazy(() => import('./Profile'));
const Butler = lazy(() => import('./Butler'));
const Schedule = lazy(() => import('./Schedule'));

const TopBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  background-color: var(--ion-color-primary);
`;

const ContactUsWrap = styled.div`
  margin: 25px auto 35px;
  padding-left: 34px;
  height: 23px;
  width: 102px;
  font-size: 14px;
  background-image: url('/images/icon_call@2x.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
`;

const Home: React.FC = () => {
  return (
    <IonPage className="Home">
      <AppHeader showBackButton={false}>会议管理</AppHeader>
      <IonContent>
        <TopBg />
        <Suspense fallback={<div />}>
          <Profile />
        </Suspense>
        <Suspense fallback={<div />}>
          <Butler />
        </Suspense>
        <Suspense fallback={<div />}>
          <Schedule />
        </Suspense>
        <ContactUs />
      </IonContent>
    </IonPage>
  );
};

const ContactUs: React.FC = () => {
  return <ContactUsWrap className="fadeInUp">联系我们</ContactUsWrap>;
};

export default Home;
