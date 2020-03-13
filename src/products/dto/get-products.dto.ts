import { IsOptional, IsNotEmpty, IsInt, Min, Max  } from "class-validator";
import { DefaultValue } from "src/decorators/DefaultValue";

export class GetProductsDto {
    @IsOptional()
    @IsNotEmpty()
    search: string;

    @IsInt()
    //@Min(0) 
    @IsOptional()   
    page: number;

    //@IsInt()
    //@Min(1)
    //@Max(100)
    @IsOptional()
    @DefaultValue(10)
    limit: number;
}