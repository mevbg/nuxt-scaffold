import { endpoint } from '#server/backend.endpoints';
import type { SendRequestFn } from '#server/server.types';
import { PROD_ENV } from '../environments/production';

export const sendRequest: SendRequestFn = ({ name, params }, config = {}) =>
  requestWithTimeout(endpoint(name, params || {}), {
    ...(!PROD_ENV
      ? {
          headers: new Headers({
            Authorization: `Basic ${btoa(`${process.env.API_AUTH_USER}:${process.env.API_AUTH_PASS}`)}`
          })
        }
      : {}),
    ...config
  });
