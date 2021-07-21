"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ItemController_1 = __importDefault(require("./controllers/ItemController"));
var StorageController_1 = __importDefault(require("./controllers/StorageController"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = express_1.Router();
var userController = new UserController_1.default();
var itemController = new ItemController_1.default();
var storageController = new StorageController_1.default();
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
exports.default = routes;
