import express, { Express } from 'express';
import dotenv from 'dotenv';
import {DataSource} from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';
import { TaskRouter } from './src/routes/task.router';

// Instantiate express app
const app: Express = express();
dotenv.config();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS for all requests
app.use(cors());

// Connect to database
export const AppDataSource: DataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + '/src/entities/**/*.ts'],
  migrations: [__dirname + '/src/migrations/**/*.ts'],
  synchronize: true,
});

// Define server port
const PORT: string | number = process.env.PORT || 5174;

// Define routes
app.use('/api/v1/tasks', new TaskRouter().getRouter());

// Connect to database
AppDataSource.initialize().then(() => {
  console.log('Database connected');
  // Start express app and listen for incoming requests
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error(`Error during database connection`, error);
});
