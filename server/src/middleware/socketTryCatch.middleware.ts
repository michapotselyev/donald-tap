import { Socket } from 'socket.io';
import { logger } from 'src/utils/logger';
import socketResponse from './socketResponse.middleware';
import xss from 'xss';

const MAX_MESSAGE_SIZE = 1000;

/**
 * Wrapper for asynchronous WebSocket message handlers with try-catch for error handling.
 * Includes message size check and XSS/injection protection.
 * @param handler - Asynchronous function to handle WebSocket messages.
 * @returns WebSocket handler with error handling, size validation, and protection from XSS/injections.
 */
export const socketTryCatch = (
  handler: (socket: Socket, data: any) => Promise<{ code: number; values: any } | void>
) => async (socket: Socket, data: any): Promise<void> => {
  try {
    const messageSize = JSON.stringify(data).length;

    if (messageSize > MAX_MESSAGE_SIZE) {
      return socketResponse(400, { error: 'Message size exceeds limit' }, socket);
    }

    const sanitizedData = sanitizeData(data);

    const result = await handler(socket, sanitizedData);

    if (result) {
      socketResponse(result.code, result.values, socket);
    } else {
      socketResponse(200, { values: 'Success' }, socket);
    }
  } catch (error) {
    logger.error(`WebSocket error: ${(error as Error).message}`);
    socketResponse(500, { error: 'Server error occurred' }, socket);
  }
};

/**
 * Sanitize data by removing potential XSS threats.
 * @param data - Data received from the client.
 * @returns Sanitized data.
 */
const sanitizeData = (data: any): any => {
  if (typeof data === 'string') {
    return xss(data);
  } else if (typeof data === 'object') {
    return sanitizeObject(data);
  }

  return data;
};

/**
 * Recursively sanitize all fields in an object.
 * @param obj - Object with potentially unsafe data.
 * @returns Object with sanitized data.
 */
const sanitizeObject = (obj: any): any => {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = xss(obj[key]);
    } else if (typeof obj[key] === 'object') {
      obj[key] = sanitizeObject(obj[key]);
    }
  }

  return obj;
};
