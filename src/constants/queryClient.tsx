import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      networkMode: 'always',
      staleTime: 60 * 1000,
      throwOnError: true,
    },
    mutations: {
      networkMode: 'always',
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export default queryClient;
