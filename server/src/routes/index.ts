import { Router, Express } from 'express';
import rateLimit from 'express-rate-limit';

import { config } from 'src/config';

import authRouter from './v1/auth.route';
import botRouter from './v1/bot.router';
import usersRouter from './v1/users.route';
import treesRouter from './v1/trees.route';

/**
 * Class representing the main application router.
 */
class AppRouter {
  private app: Express;
  private api: Router;
  private apiLimiter: any;

  /**
   * Create an instance of AppRouter.
   * @param {Express} app - The Express application object.
   */
  constructor(app: Express) {
    this.app = app;
    this.api = Router();

    if (process.env.NODE_ENV === 'production') {
      this.apiLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 1000, // limit each IP to 100 requests per windowMs
        message: 'Too many requests from this IP, please try again after 15 minutes',
      });
    }
  }

  /**
   * Initialize the routes for the application.
   */
  init(): void {
    // Apply rate limiting to all API routes if in production
    if (this.apiLimiter) {
      this.api.use(this.apiLimiter);
    }

    // Default route
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });

    // Authentication routes
    this.api.use('/auth', authRouter);

    this.api.use('/bot', botRouter);

    this.api.use('/users', usersRouter);

    this.api.use('/trees', treesRouter);

    // Use main API router with the defined prefix
    this.app.use(config.apiPrefix, this.api);
  }
}

export default AppRouter;
