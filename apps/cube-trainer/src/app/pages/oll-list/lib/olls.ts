import Oll1 from '../images/1.png';
import Oll2 from '../images/2.png';
import Oll3 from '../images/3.png';
import Oll4 from '../images/4.png';

export interface Oll {
  id?: number;
  name: string;
  group: 'Dot';
  algorithm: string;
  image: string;
  status?: string;
}

export const olls: Oll[] = [
  {
    name: '1',
    group: 'Dot',
    algorithm: `R U2 R2 F R F' U2 R' F R F'`,
    image: Oll1,
  },
  {
    name: '2',
    group: 'Dot',
    algorithm: `F R U R' U' F' f R U R' U' f'`,
    image: Oll2,
  },
  {
    name: '3',
    group: 'Dot',
    algorithm: `r' R2 U R' U r U2 r' U M'`,
    image: Oll3,
  },
  {
    name: '4',
    group: 'Dot',
    algorithm: `M U' r U2 r' U' R U' R' M'`,
    image: Oll4,
  },
];

export const mapOllsToStatuses = (
  ollStatuses: {
    [x: string]: unknown;
  }[]
) => {
  let ollListItems: Oll[] = [];
  ollListItems = olls.map((oll) => {
    if (ollStatuses) {
      const ollStatus = ollStatuses.find(
        (ollStatus) => ollStatus.oll_name === oll.name
      );

      if (ollStatus) {
        return {
          ...oll,
          id: ollStatus.id as number,
          name: ollStatus.oll_name as string,
          status: ollStatus.status as string,
        };
      }

      return { ...oll, status: 'NOT_LEARNED' };
    }

    return {
      ...oll,
      status: 'NOT_LEARNED',
    };
  });

  return ollListItems;
};
