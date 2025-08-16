// This script is meant to run server-side only

type EndpointParams = Record<string, string | number>;
type EndpointPaths = Record<string, (params: EndpointParams) => string>;

const endpoints: EndpointPaths = {
  // Search
  search: () => `search`
};

export const endpoint = (name: string, params: EndpointParams) => endpoints[name](params);
