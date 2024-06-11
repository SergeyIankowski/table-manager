export const clear = async (
  url: string,
  //TODO: Make type of arg object to reusable between all fetchers
  { arg: { id, idGroup } }: { arg: { id: string; idGroup: string } },
) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operation: 'clear',
      id,
      idGroup,
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};
