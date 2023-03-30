import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { supabase } from '../../supabase-client';

import Oll3 from './oll/3.png';

const OllList = () => {
  // const { data, error } = await supabase
  //   .from('oll')
  //   .select('name, oll_group(name), oll_scramble(scramble)');

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

        <IonCard className="flex items-center justify-between p-8">
          <label className="text-5xl">3</label>
          <img src={Oll3} alt="3" />
          <label className="text-2xl">r' R2 U R' U r U2 r' U M'</label>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default OllList;
