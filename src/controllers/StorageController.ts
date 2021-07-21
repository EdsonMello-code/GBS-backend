import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import  { Storage }   from '../models/Storage';

export default class StorageController {
  async create(request: Request, response: Response) {
    let storageRequested = request.body as Storage;
    const { id } = request.params;

    try {
      const repository = getRepository(Storage);
      const storageCreated = repository.create({ userId: parseInt(id),...storageRequested });
      const storageSaved = await repository.save(storageCreated);
      return response.json(storageSaved);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(_request: Request, response: Response) {
    try {
      const repository = getRepository(Storage);
      const storage = await repository.find({ relations: ['items'] });
      console.log(storage)
      return response.json(storage);
    } catch (error) {
      console.log(error)
      return response.status(400).json(error)
    }
  }
}