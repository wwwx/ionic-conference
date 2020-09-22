import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Loading from './components/Loading';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';
import './custom-bootstrap/index.scss'
import './App.scss'

/* eslint-disable import/first */
const Home = lazy(() => import('./pages/home/Home'))
const Reservation = lazy(() => import('./pages/reservation/Reservation'))
const TestDatePicker = lazy(() => import('./components/TestDatePicker'))

interface Page {
  pageLink: string;
  view: React.FC;
  displayName: string;
}

const pages: Page[] = [
  {
    pageLink: '/',
    view: Home,
    displayName: 'Home'
  },
  {
    pageLink: '/reservation',
    view: Reservation,
    displayName: 'Reservation'
  },
  {
    pageLink: '/loading',
    view: Loading,
    displayName: 'Loading'
  },
  {
    pageLink: '/picker',
    view: TestDatePicker,
    displayName: 'TestDatePicker'
  },
]


const App: React.FC = () => (
  <IonApp>
    <Suspense fallback={<Loading />}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            {pages.map((page, i) => {
                return (
                  <Route
                    exact={true}
                    path={page.pageLink} 
                    render={() => <page.view />} 
                    key={i}
                  />
                )
            })}
            <Redirect to="/" />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </Suspense>
  </IonApp>
);

export default App;
