import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Timer from '../components/timer/timer';
import { useContext } from 'react';
import { SessionContext } from '../lib/session-context';
import { useHistory } from 'react-router-dom';

function TimerPage() {
  const session = useContext(SessionContext);
  const history = useHistory();
  if (!session) {
    history.push('/auth');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Timer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Timer</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Timer testId="timer" />
      </IonContent>
    </IonPage>
  );
}

export default TimerPage;
