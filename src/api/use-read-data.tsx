import useSWR from 'swr';
import { baseUrl } from './constants/base-url';
import { read } from './fetchers';

export function useReadData() {
  const { data, error, isLoading } = useSWR(`${baseUrl}?operation=read`, read);

  return {
    data,
    error,
    isLoading,
    isError: error,
  };
}
