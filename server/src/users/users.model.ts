import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CategoriesModel } from '../categories/categories.model';

interface UsersCreateAttrs {
  title: string;
  chatId: number;
  role: string;
  userName: string;
  email: string;
  gender?: string;
  birthdate: number;
  phone: number;
}
@Table({ tableName: 'users' })
export class UsersModel extends Model<UsersModel, UsersCreateAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1111111 ', description: 'ID чата с ботом' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  chatId: number;

  @ApiProperty({ example: 'ADMIN', description: 'Роль пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  role: string;

  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  userName: string;

  @ApiProperty({ example: 'муж', description: 'Пол пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  gender: string;

  @ApiProperty({
    example: '01.01.1999',
    description: 'Дата рождения пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  birthdate: string;

  @ApiProperty({
    example: '79011111111',
    description: 'Номер телефона пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  phone: string;
}
