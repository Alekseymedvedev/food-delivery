import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesModel } from '../categories/categories.model';
import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';
import { FileModule } from '../file/file.module';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    SequelizeModule.forFeature([ProductsModel, CategoriesModel]),
    FileModule,
  ],
})
export class ProductsModule {}
