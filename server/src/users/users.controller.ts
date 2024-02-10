import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersDto } from './users.dto';
import { UsersModel } from './users.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Продукты')
@Controller('users')
export class UsersController {
  constructor(private productsService: UsersService) {}
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: UsersModel })
  @Post()
  create(@Body() dto: UsersDto) {
    return this.productsService.createUser(dto);
  }

  // @ApiOperation({ summary: 'Получение всех продуктов' })
  // @ApiResponse({ status: 200, type: UsersModel })
  // @Get()
  // getAll() {
  //   return this.productsService.getAllUsers();
  // }
  //
  @ApiOperation({ summary: 'Получение данных пользователя' })
  @ApiResponse({ status: 200, type: UsersModel })
  @Get(':chatId')
  getOne(@Param('chatId') chatId: number) {
    return this.productsService.getOneUser(chatId);
  }
  //
  // @ApiOperation({ summary: 'Удаление продукта' })
  // @ApiResponse({ status: 200 })
  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return this.productsService.deleteUser(id);
  // }
  //
  // @ApiOperation({ summary: 'Обновление продукта' })
  // @ApiResponse({ status: 200, type: UsersModel })
  // @Patch(':id')
  // update(@Param('id') id: number, @Body() dto: UsersDto) {
  //   return this.productsService.updateUser(+id, dto);
  // }
}
