import http from 'http';
import https from 'https';
import fs from 'fs';

import { config } from './config';
import { app } from 'src/app';
import { logger } from 'src/utils/logger';
import { disconnectFromDB } from './database';

let Server:
  https.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;

if (config.useHttps) {
  const httpsOptions = {
    cert: fs.readFileSync(config.sslCertPath),
    key: fs.readFileSync(config.sslKeyPath),
  };

  Server = https.createServer(httpsOptions, app());
} else {
  Server = http.createServer(app());
}

const server = Server.listen(config.port, () => {
  try {
    logger.info(`Listening on port ${config.port}`);
  } catch (error) {
    logger.error(`An error occurred: ${(error as Error).message}`);
  }
});

server.on('error', (err) => {
  logger.error(`Server error: ${err.message}`);
});

process.on("SIGTERM", async () => {
  logger.info("SIGTERM received");

  try {
    await disconnectFromDB();
  } catch (error) {
    logger.error(`Error disconnecting from the database: ${(error as Error).message}`);
  }

  if (server) {
    server.close(() => {
      logger.info("Server closed");
    });
  }
});
