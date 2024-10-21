import joi from '@hapi/joi';

export const configSchema = joi
  .object({
    rootDir: joi.string().required(),
    nodeEnv: joi.string().valid('production', 'development', 'staging').required(),
    apiPrefix: joi.string().required(),
    port: joi.number().required(),
    socketPort: joi.number().required(),
    cors: {
      origin: joi.string().uri().allow('localhost', true).required()
    },
    logLevel: joi.string().valid('error', 'debug', 'info').required(),
    logTransports: joi.array().items(joi.string().valid('console', 'file')).required(),
    useHttps: joi.bool().required(),
    sslCertPath: joi
      .string()
      .when('useHttps', {
        is: true,
        then: joi.string().required(),
        otherwise: joi.string().optional(),
      }),
    sslKeyPath: joi
      .string()
      .when('useHttps', {
        is: true,
        then: joi.string().required(),
        otherwise: joi.string().optional(),
      }),
  })
  .options({ presence: 'required' });
