import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route } from 'react-router-dom';

import SplitPane from './components/split-pane';
import SessionContextProvider from './lib/session-context';
import Authentication from './pages/auth';
import DefaultRoute from './pages/default-route';
import OllId from './pages/oll-list/oll-id';
import OllList from './pages/oll-list/oll-list';
import TimerPage from './pages/timer';

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
  const queryClient = new QueryClient();

  return (
    <SessionContextProvider>
      <QueryClientProvider client={queryClient}>
        <IonApp>
          <IonReactRouter>
            <SplitPane>
              <IonRouterOutlet id="main">
                <Route path="/auth" component={Authentication} />

                <Route path="/timer" component={TimerPage} />

                <Route path="/oll-list" exact component={OllList} />
                <Route path="/oll-list/:ollName" component={OllId} />

                <Route exact path="/" component={DefaultRoute} />
              </IonRouterOutlet>
            </SplitPane>
          </IonReactRouter>
        </IonApp>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default App;
