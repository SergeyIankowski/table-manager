import { baseUrl } from './constants/base-url';
import useSWRMutation from 'swr/mutation';
import { clear } from './fetchers';

export const useDeleteTool = () => {
  const { trigger } = useSWRMutation(baseUrl, clear);

  return { trigger };
};
