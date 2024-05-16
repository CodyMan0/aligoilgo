import { useMutation, useQueryClient } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';
import useToast from './useToast';

const useDeleteSeedMutation = () => {
    const toast = useToast()
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: async (seedId: number) => {
        await targetAPI.deleteSeed(seedId);
    },
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [...targetOptions.all],
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