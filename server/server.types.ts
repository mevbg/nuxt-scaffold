// Endpoint types
export type EndpointParams = Record<string, string | number>;
export type EndpointPaths = Record<string, (params: EndpointParams) => string>;
export type EndpointFn = (name: string, params: EndpointParams) => string;

// Request types
export type SendRequestConfig = Record<string, unknown>;
export type SendRequestFn = (
  { name, params }: { name: string; params?: EndpointParams },
  config?: SendRequestConfig
) => Promise<unknown>;
