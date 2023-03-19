import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

import { supabase } from '../../supabase-client';

const Authentication: React.FC = () => {
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
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </IonContent>
    </IonPage>
  );
};

export default Authentication;
