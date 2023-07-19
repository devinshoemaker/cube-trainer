import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Auth } from '@supabase/auth-ui-react';

import { supabase } from '../lib/supabase-client';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SessionContext } from '../lib/session-context';

const Authentication: React.FC = () => {
  const session = useContext(SessionContext);
  const history = useHistory();
  if (session) {
    history.push('/timer');
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Auth</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Auth</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Auth supabaseClient={supabase} providers={[]} />
      </IonContent>
    </IonPage>
  );
};

export default Authentication;
