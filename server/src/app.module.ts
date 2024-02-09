import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { SequelizeModule } from '@nestjs/sequelize';
import {ConfigModule} from "@nestjs/config";
import {CategoriesModel} from "./categories/categories.model"
import { ProductsModule } from './products/products.module';
import {ProductsModel} from "./products/products.model";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATA_BASE_HOST,
      port: +process.env.DATA_BASE_PORT,
      username:process.env.DATA_BASE_USERNAME,
      password: process.env.DATA_BASE_PASSWORD,
      database: process.env.DATA_BASE_NAME,
      models: [ProductsModel,CategoriesModel],
      autoLoadModels:true
    }),
    ProductsModule,
    CategoriesModule,
  ],

})
export class AppModule {}
