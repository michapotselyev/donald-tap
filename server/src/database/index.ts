import { Sequelize } from 'sequelize';
import 'dotenv/config';
import { logger } from 'src/utils/logger';

/**
 * Sequelize instance for connecting to the database.
 * @type {Sequelize}
 */
export const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      connectTimeout: 10000,
    }
  }
);

/**
 * Function to connect to the database.
 * @returns {Promise<void>}
 */
async function connectToDB(): Promise<void> {
  try {
    await sequelize.authenticate();
    logger.info("Connection to the database has been established successfully.");
  } catch (error) {
    logger.error(`Unable to connect to the database: ${(error as Error).message}`);
  }
}

/**
* Function to disconnect from the database.
* @returns {Promise<void>}
*/
async function disconnectFromDB(): Promise<void> {
  try {
    await sequelize.close();
    logger.info("Connection to the database has been closed successfully.");
  } catch (error) {
    logger.error(`Error closing the connection: ${(error as Error).message}`);
  }
}

/**
* Function to synchronize models with the database.
* @returns {Promise<void>}
*/
async function syncModels(): Promise<void> {
  try {
    await sequelize.sync(
      {
        force: false,
        alter: process.env.NODE_ENV === 'development'
      }
    );

    logger.info("Models have been synchronized successfully.");
  } catch (error) {
    logger.error(`Error synchronizing models: ${(error as Error).message}`);
  }
}

export { connectToDB, disconnectFromDB, syncModels };
export default sequelize;
