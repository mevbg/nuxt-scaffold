import { endpoint } from '#server/endpoints';

export default defineEventHandler(() => requestWithTimeout(endpoint('searchForm', {})));
