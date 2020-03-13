import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductsRepository)private productsRepo:ProductsRepository
    ){}

    async paginate(search:string, options: IPaginationOptions): Promise<Pagination<Product>> {
        return await this.productsRepo.paginate(search, options)
      }
}
