import { supabase } from '../../../lib/supabase-client';

export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return user;
};

export const getOllStatusesByUserId = async (userId: string) => {
  const { data, error } = await supabase
    .from('oll_status')
    .select()
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data;
};

export const updateOllStatus = async (
  userId: string,
  ollStatusId: number | undefined,
  ollName: string,
  ollStatus: string
) => {
  const { error } = await supabase.from('oll_status').upsert({
    id: ollStatusId,
    user_id: userId,
    oll_name: ollName,
    status: ollStatus,
  });

  if (error) {
    throw error;
  }
};
