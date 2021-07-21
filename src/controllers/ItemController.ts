import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Item } from '../models/Item';

export default class ItemController {
  
  async create(request: Request, response: Response) {
    const { userId, id } = request.params;

    const item = request.body as Item;
    
    try {
      const repository = getRepository(Item);
      const ItemCreated = repository.create({ userId: parseInt(userId), storagesId: parseInt(id),...item});
      const ItemSaved = await repository.save(ItemCreated);
      return response.json(ItemSaved);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async index(request: Request, response: Response) {
    const { userId, id } = request.params;

    try {
      const repository = getRepository(Item);
      const items = await repository.find({ where: { userId } });
      console.log(items)
      return response.json(items);
    } catch (error) {
      return response.status(400).json(error)
    }
  }

  async search(request: Request, response: Response) {
    try {
      const { text } = request.query;
      
      const repository = getRepository(Item);
      
      const item = await repository.query(`SELECT * FROM items where items.name Like '%${text}%'`)
      return response.json(item);
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}