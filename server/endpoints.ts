// This script is meant to run server-side only

type EndpointParams = Record<string, string | number>;
type EndpointPaths = Record<string, (params: EndpointParams) => string>;

const endpoints: EndpointPaths = {
  // Offers
  searchForm: () => `offers/search-form`,
  offer: ({ id }) => `offers/${id}`,
  search: () => `offers/search`,
  searchLocalities: () => `offers/search-localities`
};

export const endpoint = (name: string, params: EndpointParams) => endpoints[name](params);
