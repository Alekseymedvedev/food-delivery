import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModel } from '../products/products.model';
import { CategoriesModel } from './categories.model';
import { FileModule } from 'src/file/file.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([ProductsModel, CategoriesModel]),
    FileModule,
  ],
})
export class CategoriesModule {}
