import { sendRequest } from '#server/server.utils';

export default defineEventHandler(async (event) => {
  const params = await readBody(event);

  return sendRequest({ name: 'search', params });
});
