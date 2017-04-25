/*******************************************************
 * Import dependencies
 *******************************************************/
import * as express from 'express';
import { NestFactory } from 'nest.js';
/** Global Middlewares */
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
/** Db Populate */
import './db/sqlite';
/** Nest Builder */
import { ApplicationModule } from './app.module';

/*******************************************************
 * Config Express server
 *******************************************************/
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(__dirname + '/'));
server.use(cors());

/*******************************************************
 * Create and run Nest App
 *******************************************************/
const app = NestFactory.create(ApplicationModule, server);
app.listen(3000, () => {
    console.log('Typescript Nest app & Express server running on port 3000');
});