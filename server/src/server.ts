import http from 'http';
import https from 'https';
import fs from 'fs';

import { config } from './config';

import { app } from 'src/app';
import { SocketService } from './socket';

import { disconnectFromDB } from './database';

import { logger } from 'src/utils/logger';

let Server:
  https.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;

let SocketServer:
  https.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;

if (config.useHttps) {
  try {
    const httpsOptions = {
      cert: fs.readFileSync(config.sslCertPath),
      key: fs.readFileSync(config.sslKeyPath),
    };
  
    Server = https.createServer(httpsOptions, app());
    SocketServer = https.createServer(httpsOptions)
  } catch (error) {
    logger.error(`Failed to load HTTPS certificates: ${(error as Error).message}`);
    process.exit(1);
  }
} else {
  Server = http.createServer(app());
  SocketServer = http.createServer();
}

const socketService = new SocketService(SocketServer);
socketService.init();

const server = Server.listen(config.port, () => {
  try {
    logger.info(`API listening on port ${config.port}`);
  } catch (error) {
    logger.error(`API: An error occurred: ${(error as Error).message}`);
  }
});

const socketServer = SocketServer.listen(config.socketPort, () => {
  try {
    logger.info(`Socket listening on port ${config.socketPort}`);
  } catch (error) {
    logger.error(`Socket: An error occurred: ${(error as Error).message}`);
  }
});

server.on('error', (err) => {
  logger.error(`API error: ${err.message}`);
  process.exit(1);
});

socketServer.on('error', (err) => {
  logger.error(`Socket error: ${err.message}`);
  process.exit(1);
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
      logger.info("API closed");
    });
  }

  if (socketServer) {
    socketServer.close(() => {
      logger.info("Socket server closed");
    });
  }
});
