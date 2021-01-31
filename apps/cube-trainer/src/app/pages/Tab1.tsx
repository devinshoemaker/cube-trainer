import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import getTwoLookOll from '../utils/get-two-look-oll';

const Tab1: React.FC = () => {
  const Algorithm = getTwoLookOll();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="flex justify-center ion-padding">
          <Algorithm />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
