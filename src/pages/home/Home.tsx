import React, { lazy, Suspense } from 'react'
import { IonContent, IonItem, IonLabel, IonPage, IonToggle } from '@ionic/react'

import AppHeader from '../../components/AppHeader'

const Profile = lazy(() => import('./Profile'));
const Butler = lazy(() => import('./Butler'));
const Schedule = lazy(() => import('./Schedule'));

const Home: React.FC = () => {
  return (
    <IonPage className="Home">
      <AppHeader showBackButton={false}>会议管理</AppHeader>
      <IonContent>
        <div className="hello"></div>

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

        {false && <DarkSwitch />}
      </IonContent>
    </IonPage>
  );
};

const ContactUs: React.FC = () => {
  return <div className="contactUs fadeInUp">联系我们</div>;
};

// TODO use Dark Theme
const DarkSwitch: React.FC = () => {
  // Query for the toggle that is used to change between themes
  const toggle = document.querySelector('#themeToggle');

  // Listen for the toggle check/uncheck to toggle the dark class on the <body>
  toggle &&
    toggle.addEventListener('ionChange', (ev: any) => {
      document.body.classList.toggle('dark', ev.detail.checked);
    });

  return (
    <IonItem className="mb-3">
      <IonLabel>Toggle Dark Theme</IonLabel>
      <IonToggle id="themeToggle"></IonToggle>
    </IonItem>
  );
};
export default Home;
