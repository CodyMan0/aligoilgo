import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import seedAPI from '@/api/seed/apis';
import seedOptions from '@/api/seed/queryOptions';
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
      seedAPI.postSeed({ seed, routines, endDate }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: seedOptions.all,
        refetchType: 'all',
      });
      show('createToast');
      navigate('/seed');
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
