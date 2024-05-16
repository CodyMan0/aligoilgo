import { useMutation, useQueryClient } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';
import useToast from './useToast';

const useRoutineMutation = (seedId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate: checkRotine } = useMutation({
    mutationFn: targetAPI.patchRoutineDone,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: targetOptions.detailTarget(seedId).queryKey,
        refetchType: 'all',
      });
      await queryClient.invalidateQueries({
        queryKey: targetOptions.all,
        refetchType: 'all',
      });
      toast({ message: 'SEED_ROUTINE_STATE_SUCCESS' });
    },
    onError: () => {
      toast({ message: 'SEED_ROUTINE_STATE_FAIL' });
    },
  });
  return { checkRotine };
};

export default useRoutineMutation;
