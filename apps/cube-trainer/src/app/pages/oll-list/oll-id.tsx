import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import Timer from '../../components/timer/timer';
import OllCard from './components/oll-card';
import { useGetCurrentUser, useGetOllStatuses } from './lib/hooks';
import { mapOllsToStatuses } from './lib/olls';

const OllId = () => {
  const { ollName } = useParams<{ ollName: string }>();
  const { user, isLoadingUser } = useGetCurrentUser();
  const { ollStatuses, isLoadingOllStatuses } = useGetOllStatuses(user?.id);

  if (!user || isLoadingUser || isLoadingOllStatuses || !ollStatuses) {
    return null;
  }

  const userOlls = mapOllsToStatuses(ollStatuses);

  const oll = userOlls.find((oll) => oll.name === ollName);

  if (!oll || isLoadingUser || !user) {
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>OLL List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">OLL List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div>
          <OllCard oll={oll} userId={user.id} />
          <Timer testId="oll-timer" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OllId;
