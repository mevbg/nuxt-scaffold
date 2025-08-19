import type { EndpointFn, EndpointPaths } from '#server/server.types';

const endpoints: EndpointPaths = {
  search: () => `search`
};

export const endpoint: EndpointFn = (name, params = {}) => {
  const endpointPathFn = endpoints[name];
  if (!endpointPathFn) {
    throw new Error(`Unknown endpoint: ${name}`);
  }
  return endpointPathFn(params);
};
