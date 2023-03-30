import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { supabase } from '../supabase-client';
import Menu from './components/Menu';
import Authentication from './pages/auth';
import OllList from './pages/oll-list';
import Page from './pages/Page';
import Timer from './pages/timer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

export function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (isLoading) {
    return null;
  }

  if (!session) {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/auth">
              <Authentication />
            </Route>
            <Redirect to="/auth" />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/timer" exact={true}>
              <Timer />
            </Route>
            <Route path="/oll-list" exact={true}>
              <OllList />
            </Route>
            <Redirect to="/" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
