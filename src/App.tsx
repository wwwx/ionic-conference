import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import './App.scss'
import './mini-bootstrap/index.scss'
import './theme/variables.css'

import React, { lazy, Suspense } from 'react'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route, Switch } from 'react-router-dom'

import Loading from './components/Loading'

const Home = lazy(() => import('./pages/home/Home'));
const MySchedule = lazy(() => import('./pages/home/MySchedule'));
const Reservation = lazy(() => import('./pages/reservation/Reservation'));
const ConferenceDetail = lazy(() => import('./pages/reservation/ConferenceDetail'));
const AvailableRoom = lazy(() => import('./pages/room/AvailableRoom'));
const RoomDetail = lazy(() => import('./pages/room/RoomDetail'));
const Mine = lazy(() => import('./pages/mine/Mine'));
const Record = lazy(() => import('./pages/mine/Record'));

interface Page {
  pageLink: string;
  view: React.FC;
  displayName: string;
}

const pages: Page[] = [
  {
    pageLink: '/',
    view: Home,
    displayName: 'Home',
  },
  {
    pageLink: '/my-schedule',
    view: MySchedule,
    displayName: 'MySchedule',
  },
  {
    pageLink: '/reservation',
    view: Reservation,
    displayName: 'Reservation',
  },
  {
    pageLink: '/conference-detail',
    view: ConferenceDetail,
    displayName: 'ConferenceDetail',
  },
  {
    pageLink: '/available-room',
    view: AvailableRoom,
    displayName: 'AvailableRoom',
  },
  {
    pageLink: '/room-detail',
    view: RoomDetail,
    displayName: 'RoomDetail',
  },
  {
    pageLink: '/mine/:type',
    view: Mine,
    displayName: 'Mine',
  },
  {
    pageLink: '/record/:type',
    view: Record,
    displayName: 'Record',
  },
  {
    pageLink: '/loading',
    view: Loading,
    displayName: 'Loading',
  },
];

const App: React.FC = () => (
  <IonApp>
    <Suspense fallback={<Loading />}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            {pages.map((page, i) => {
              return <Route exact={true} path={page.pageLink} render={() => <page.view />} key={i} />;
            })}
            <Redirect to="/" />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </Suspense>
  </IonApp>
);

export default App;
