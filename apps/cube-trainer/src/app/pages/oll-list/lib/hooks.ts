import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  getCurrentUser,
  getOllStatusesById,
  getOllStatusesByUserId,
  updateOllStatus,
} from './data';

export const useGetCurrentUser = () => {
  const {
    data: user,
    isLoading: isLoadingUser,
    error: userError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return { user, isLoadingUser, userError };
};

export const useGetOllStatuses = (userId: string | undefined) => {
  const {
    data: ollStatuses,
    isLoading: isLoadingOllStatuses,
    error: ollStatusesError,
  } = useQuery({
    queryKey: ['ollStatuses', userId],
    queryFn: async () => {
      if (userId) {
        return await getOllStatusesByUserId(userId);
      }
    },
    enabled: !!userId,
  });

  return { ollStatuses, isLoadingOllStatuses, ollStatusesError };
};

export const useUpdateOllStatusMutation = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateOllStatusMutation,
    isLoading: isLoadingUpdateOllStatus,
    isSuccess: isSuccessOllStatus,
    error: updateOllStatusError,
  } = useMutation({
    mutationFn: ({
      userId,
      ollStatusId,
      ollName,
      ollStatus,
    }: {
      userId: string;
      ollStatusId: number | undefined;
      ollName: string;
      ollStatus: string;
    }) => updateOllStatus(userId, ollStatusId, ollName, ollStatus),
  });

  return {
    updateOllStatusMutation,
    isLoadingUpdateOllStatus,
    isSuccessOllStatus,
    updateOllStatusError,
  };
};
