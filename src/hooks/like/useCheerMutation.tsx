import { useMutation, useQueryClient } from '@tanstack/react-query';

import seedAPI from '@/api/seed/apis';
import seedOptions from '@/api/seed/queryOptions';
import useToast from '../useToast';

const useCheerMutation = (seedId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutateAsync: likes } = useMutation({
    mutationFn: () => seedAPI.patchSeedLikes(seedId),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: seedOptions.getCheeringUserList(seedId).queryKey,
        refetchType: 'all',
      });

      if (data.message === 'add') {
        toast({ type: 'default', message: '햇빛을 통해 씨앗이 자랄 수 있게 응원하셨어요' });
      } else {
        toast({ type: 'default', message: '응원을 취소하셨어요' });
      }
    },
  });
  return { likes };
};

export default useCheerMutation;
