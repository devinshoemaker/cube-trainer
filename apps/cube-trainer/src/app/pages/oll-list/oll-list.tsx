import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import OllCard from './components/oll-card';
import { useGetCurrentUser, useGetOllStatuses } from './lib/hooks';
import { mapOllsToStatuses } from './lib/olls';

const OllList = () => {
  const { user, isLoadingUser } = useGetCurrentUser();
  const { ollStatuses, isLoadingOllStatuses } = useGetOllStatuses(user?.id);

  if (!user || isLoadingUser || isLoadingOllStatuses || !ollStatuses) {
    return null;
  }

  const userOlls = mapOllsToStatuses(ollStatuses);

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

        <IonList>
          {userOlls.map((oll) => (
            <OllCard oll={oll} userId={user.id} key={oll.name} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default OllList;
