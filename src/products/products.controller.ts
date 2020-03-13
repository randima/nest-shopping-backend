import { Controller, Post, Get, Query, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get()
    async getProducts(@Query('search') search:string, @Query('page') page = 0, @Query('limit') limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return await this.productsService.paginate(search,{page, limit, route: 'localhost:3000/api/v1/products',});
    }


}
