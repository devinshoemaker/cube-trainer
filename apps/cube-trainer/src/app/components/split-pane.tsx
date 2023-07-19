import { IonSplitPane } from '@ionic/react';
import { useContext } from 'react';

import { SessionContext } from '../lib/session-context';
import Menu from './Menu';

interface SplitPaneProps {
  children: JSX.Element;
}

function SplitPane({ children }: SplitPaneProps) {
  const session = useContext(SessionContext);

  return session ? (
    <IonSplitPane contentId="main">
      <Menu />
      {children}
    </IonSplitPane>
  ) : (
    children
  );
}

export default SplitPane;
