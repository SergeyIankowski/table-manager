import { TableData } from '../../types/IToolType';

export const update = async (
  url: string,
  //TODO: Make type of arg object to reusable between all fetchers
  { id, idGroup, newPlace }: { id: string; idGroup: string; newPlace: string },
  //TODO: Recheck Promise generic and write right return type
): Promise<TableData> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operation: 'update',
      id,
      idGroup,
      newPlace,
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
