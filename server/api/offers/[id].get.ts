import { endpoint } from '#server/endpoints';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  try {
    const data = await requestWithTimeout(endpoint('offer', { id }));
    return data;
  } catch (err: unknown) {
    const { statusCode = 500, statusMessage = 'Internal Server Error' } = err as {
      statusCode?: number;
      statusMessage?: string;
    };
    throw createError({
      statusCode,
      statusMessage
    });
  }
});
