import { useMutation, useQueryClient } from '@tanstack/react-query';

import seedAPI from '@/api/seed/apis';
import seedOptions from '@/api/seed/queryOptions';
import useToast from '../../useToast';

const useRoutineMutation = (seedId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate: checkRotine } = useMutation({
    mutationFn: seedAPI.patchRoutineDone,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: seedOptions.detailTarget(seedId).queryKey,
        refetchType: 'all',
      });
      await queryClient.invalidateQueries({
        queryKey: seedOptions.all,
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
