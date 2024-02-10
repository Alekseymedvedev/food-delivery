import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CategoriesModel } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from 'src/file/file.service';
import { CategoriesDto } from './categories.dto';
import { ProductsModel } from 'src/products/products.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategoriesModel)
    private categoriesRepository: typeof CategoriesModel,
    private fileService: FileService,
  ) {}
  async createCategories(dto: CategoriesDto, image: string) {
    try {
      const fileName = await this.fileService.createFile(image);
      const category = await this.categoriesRepository.create({
        ...dto,
        image: fileName,
      });
      return category;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при создании категории',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async getAllCategories(): Promise<CategoriesModel[]> {
    try {
      return this.categoriesRepository.findAll();
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при получении категорий',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async getCategoryById(id: number): Promise<CategoriesModel> {
    try {
      const category = await this.categoriesRepository.findOne({
        where: { id },
        include: ProductsModel,
      });
      if (!category) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
      }
      return category;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при получении категории',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateCategory(id: number, dto: CategoriesDto, image: string) {
    try {
      const category = await this.categoriesRepository.findOne({
        where: { id },
      });
      const fileName = image
        ? await this.fileService.createFile(image)
        : category.dataValues.image;
      await category.update({ ...dto, image: fileName });
      return dto;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при обновлении категории',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async deleteCategory(id: number): Promise<void> {
    try {
      const category = await this.getCategoryById(id);
      await category.destroy();
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при удалении категории',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
