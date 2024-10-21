import { Socket } from "socket.io";
import socketController from "src/controllers/socket.controller";

import { socketTryCatch } from "src/middleware/socketTryCatch.middleware";

/**
 * Initializes WebSocket event handlers.
 * @param socket - The WebSocket connection.
 */
export const socketHandlers = (socket: Socket) => {
  socket.on(
    'get-progress',
    (data: any) => socketTryCatch(
      socketController.getProgress.bind(socketController)
    )(socket, data)
  );

  // socket.on(
  //   'getAllUsers',
  //   socketTryCatch(async (socket) => {
  //     const users = await userService.getAllUsers();
  //     return { code: 200, values: users };
  //   })
  // );
};