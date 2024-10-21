import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { Server } from "socket.io";
import { config } from "src/config";
import { socketHandlers } from "src/handlers/socket.handler";
import { logger } from "src/utils/logger";

export class SocketService {
  private io: Server;

  constructor(server: HttpServer | HttpsServer) {
    this.io = new Server(server, {
      cors: config.cors
    });
  }

  public init(): void {
    this.io.on("connection", (socket) => {
      logger.info(`New connection: ${socket.id}`);

      socketHandlers(socket);

      socket.on("disconnect", () => {
        logger.info(`User disconnected: ${socket.id}`);
      });
    });
  }
}
