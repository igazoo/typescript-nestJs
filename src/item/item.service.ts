import { Injectable } from '@nestjs/common';
import { Item } from "src/entities/item.entity";
import { Repository,InsertResult, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemDTO } from "./item.dto";

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>
    ) { }
    
    // テーブル全データ取得
    async findAll(): Promise<Item[]>{
        return await this.itemRepository.find();
    }

    // テーブルにアイテムを追加
    async create(item: CreateItemDTO): Promise<InsertResult>{
       return  await this.itemRepository.insert(item);
    }

    // idを指定し、１件のデータ取得
    async find(id: number): Promise<Item>|null{
        return await this.itemRepository.findOne({id: id});
    }

    // idを指定し、データの更新
    async update(id: number, item): Promise<UpdateResult>{
        return await this.itemRepository.update(id, item);
    }

    // idを指定し、データの削除
    async delete(id: number): Promise<DeleteResult>{
        return await this.itemRepository.delete(id);
    }
}
