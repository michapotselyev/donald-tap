import { Router, Express } from 'express';

import { config } from 'src/config';


export default (app: Express): void => {
  // app.use(rootRoutes);

  const api = Router();
  // api.use('/users', userRoutes);

  app.use(config.apiPrefix, api);
};
