import { Socket } from 'socket.io';

/**
 * Sends a JSON response via WebSocket.
 * @param code - The response status code.
 * @param values - The response data.
 * @param socket - The WebSocket connection.
 */
const socketResponse = (code: number, values: any, socket: Socket): void => {
  const data = {
    status: code,
    values,
  };
  socket.emit('response', data);
};

export default socketResponse;
