import { Repository, EntityRepository } from "typeorm";
import { Product } from "./product.entity";
import { IPaginationOptions, Pagination, paginate } from "nestjs-typeorm-paginate";

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product>{


    async paginate(search: string, options: IPaginationOptions): Promise<Pagination<Product>> {
        const query = this.createQueryBuilder('product');

        if(search){
            query.andWhere('(product.name LIKE :search) ',{search:`%${search}%`});
        }     
        return await paginate<Product>(query, options);
      }
}