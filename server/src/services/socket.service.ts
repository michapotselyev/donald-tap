import { promises as fs } from 'fs';
import { Socket } from 'socket.io';
import { logger } from 'src/utils/logger';
import { Matrix } from 'src/models/Matrix.model';
import zlib from 'zlib';
import { promisify } from 'util';

// Promisify the gzip decompression function
const gunzip = promisify(zlib.gunzip);

export class SocketService {
  public async getProgress(userId: number) {
    try {
      const matrixProgress = await Matrix.findOne({
        where: { user: userId }
      });
  
      if (!matrixProgress) {
        return { code: 404, values: `No progress found for user ${userId}` };
      }

      const filePath = matrixProgress.matrixFilePath;

      const fileBuffer = await fs.readFile(filePath);

      const decompressedData = await gunzip(fileBuffer);

      const matrixData = JSON.parse(decompressedData.toString());

      return {
        code: 200,
        values: {
          ...matrixProgress,
          matrix: matrixData,
        } 
      };
    } catch (error) {
      logger.error(
        `Error while fetching user progress by socket: ` +
        `${(error as Error).message}`
      );
      return { code: 500, values: `Error while processing request by socket: ${error}` };
    }
  }
}
