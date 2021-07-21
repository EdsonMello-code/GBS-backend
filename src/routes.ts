import { Router } from 'express';
import ItemController from './controllers/ItemController';
import StorageController from './controllers/StorageController';
import UserController from './controllers/UserController';

const routes = Router();

const userController = new UserController() 
const itemController = new ItemController() 
const storageController = new StorageController() 

// users
routes
  .post('/users', userController.create)
  .get('/users/:id', userController.show);

// storages 
routes
  .post('/users/:id/storages', storageController.create)
  .get('/users/:id/storages', userController.show);

// items
routes
  .post('/users/:userId/storages/:id/items', itemController.create)
  .get('/users/:userId/storages/items', itemController.index)
  .get('/users/storages/items', itemController.search);

export default routes;