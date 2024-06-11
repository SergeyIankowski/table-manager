import { TableData } from '../../types/IToolType';

export const read = async (url: string): Promise<TableData> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
