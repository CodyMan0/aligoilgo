import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import targetAPI from '@/api/target/apis';
import targetOptions from '@/api/target/queryOptions';
import useToast from '@/hooks/useToast';
import useToastList from '@/hooks/useToastList';
import { SeedResponseType } from '@/types/target/type';

const useCreateSeedMutation = () => {
  const queryClient = useQueryClient();
  const { show } = useToastList();
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate: submitSeed, isPending } = useMutation({
    mutationFn: ({ seed, routines, endDate }: SeedResponseType) =>
      targetAPI.postSeed({ seed, routines, endDate }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: targetOptions.all,
        refetchType: 'all',
      });
      show('createToast');
      navigate('/target');
      toast({ message: 'SEED_CREATE_SUCCESS' });
    },
    onError: () => {
      //TODO: ERROR toast 구현
      toast({ message: 'SEED_CREATE_FAIL' });
    },
  });
  return { submitSeed, isPending };
};

export default useCreateSeedMutation;
