import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { SessionContext } from '../lib/session-context';

function DefaultRoute() {
  const session = useContext(SessionContext);
  const history = useHistory();

  if (session) {
    history.push('/timer');
  } else {
    history.push('/auth');
  }

  return null;
}

export default DefaultRoute;
