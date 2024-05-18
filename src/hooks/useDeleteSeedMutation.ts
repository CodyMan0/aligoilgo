import { useMutation, useQueryClient } from '@tanstack/react-query';

import seedAPI from '@/api/seed/apis';
import seedOptions from '@/api/seed/queryOptions';
import useToast from './useToast';

const useDeleteSeedMutation = () => {
    const toast = useToast()
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: async (seedId: number) => {
        await seedAPI.deleteSeed(seedId);
    },
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [...seedOptions.all],
          refetchType: 'all',
        });
        toast({message:'SEED_DELETE_SUCCESS'})
      },
      onError: (() => {
        toast({message:'SEED_DELETE_FAIL'})
      })
    });
  
    return {mutate}
}

export default useDeleteSeedMutation