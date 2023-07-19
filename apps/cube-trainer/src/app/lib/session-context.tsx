import { Session } from '@supabase/supabase-js';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { supabase } from './supabase-client';

export const SessionContext = createContext<Session | null>(null);

interface SessionContextProps {
  children: ReactNode;
}

export const SessionContextProvider = ({ children }: SessionContextProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
