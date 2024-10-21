import { ValidationError } from "@hapi/joi";
import { Socket } from "socket.io";

import { getProgressSchema } from "src/schemas/socket.shema";
import { SocketService } from "src/services/socket.service";

/**
 * Controller class for socket
 * @class
 */
export class SocketController {
  private service: SocketService;

  constructor() {
    this.service = new SocketService();
  }

  /**
   * Get all user progress for WebSocket.
   * @param {Socket} socket The WebSocket connection object.
   * @param {any} data Data sent by the client (optional).
   * @returns {Promise<{code: number, values: any}>} The result of the operation.
   */
  public async getProgress(socket: Socket, data: { userId: number }):
    Promise<{code: number, values: any}> {
    const { error, value } = getProgressSchema.validate(data);

    if (error) {
      return { 
        code: 400, 
        values: `Validation Error: ${(error as ValidationError).message}` 
      };
    }

    const { userId } = value;

    const { code, values } = await this.service.getProgress(userId);

    return { code, values };
  }
}

const socketController = new SocketController();

export default socketController;
