import { ShipEngineApiClientConfig } from './models/public';
import { ServiceFactory } from './services/service-factory';
import { ShipEngineApiClient } from './services/shipengine-api-factory';

// should this api key be optional here in case of users who want to _only_ use api keys on a request by request basis?

type ApiKey = string;

type SimplifiedConfig = {
  apiKey: ApiKey;
  baseUrl?: string;
  retryBackoffType?: 'linear' | 'static' | 'exponential';
};

export type ShipEngineConfig = ApiKey | SimplifiedConfig;

const mapToApiServiceConfig = (
  config: ShipEngineConfig
): ShipEngineApiClientConfig => {
  if (typeof config === 'string') {
    return { apiKey: config };
  }

  return {
    apiKey: config.apiKey,
    requestOptions: {
      baseURL: config.baseUrl,
      raxConfig: {
        backoffType: config.retryBackoffType,
      },
    },
  };
};

export const ShipEngine = (config: ShipEngineConfig) => {
  return ServiceFactory(ShipEngineApiClient(mapToApiServiceConfig(config)));
};

export * from './models/public';