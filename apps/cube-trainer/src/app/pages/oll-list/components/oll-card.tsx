import { IonCard, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useUpdateOllStatusMutation } from '../lib/hooks';
import { Oll } from '../lib/olls';

interface OllListItemProps {
  oll: Oll;
  userId: string;
}

const OllCard = ({ oll, userId }: OllListItemProps) => {
  const [status, setStatus] = useState<string>(
    oll.status ? oll.status : 'NOT_LEARNED'
  );

  const { updateOllStatusMutation } = useUpdateOllStatusMutation();

  useEffect(() => {
    if (status !== oll.status) {
      updateOllStatusMutation({
        userId,
        ollStatusId: oll.id,
        ollName: oll.name,
        ollStatus: status,
      });
    }
  }, [oll.id, oll.name, oll.status, status, updateOllStatusMutation, userId]);

  return (
    <IonCard>
      <Link
        to={`/oll-list/${oll.name}`}
        className="flex items-center justify-between p-8"
      >
        <label className="text-5xl">{oll.name}</label>
        <label className="text-3xl">{oll.group}</label>
        <label className="text-2xl">{oll.algorithm}</label>
        <img src={oll.image} alt="3" />
      </Link>
      <IonSegment
        value={status}
        onIonChange={(e) => {
          if (e.target.value) {
            setStatus(e.target.value);
          }
        }}
      >
        <IonSegmentButton value="NOT_LEARNED">
          <IonLabel>Not Learned</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="LEARNING">
          <IonLabel>Learning</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="LEARNED">
          <IonLabel>Learned</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonCard>
  );
};

export default OllCard;
