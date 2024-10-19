import express, { NextFunction, Request, Response, Express } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import path from "path";
import xss from 'xss-clean';
import compression from 'compression';

import { config } from './config';
import AppRouter from './routes';
import { logger } from './utils/logger';
import { connectToDB, syncModels } from './database';

export const app = (app = express()): Express => {
  // Connect to the database
  connectToDB();

  // Sync models (in production)
  if (process.env.NODE_ENV === "development") {
    syncModels();
  }

  // Security middleware
  app.use(helmet()); // Basic security headers
  app.use(xss()); // XSS protection
  app.use(cors(config.cors)); // CORS with custom configuration

  // Compression for performance
  app.use(compression());

  // Body parsers with limits
  app.use(express.json({ limit: '1000mb' }));
  app.use(express.urlencoded({ extended: false, limit: '1000mb' }));

  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
  //     return res.redirect('https://' + req.headers.host + req.url);
  //   }
  //   next();
  // });

  // Initialize the router
  (new AppRouter(app)).init();

  app.use("/skills-logos", express.static(`${path.resolve()}/assets/images/skills`));

  // 404 handler
  app.use((_, res: Response) => res.sendStatus(404));

  // Error handler middleware
  app.use((error: Error, _: Request, __: Response, next: NextFunction) => {
    logger.error(error);
    next(error);
  });

  return app;
};
