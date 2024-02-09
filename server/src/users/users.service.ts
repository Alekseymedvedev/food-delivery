import {Injectable} from '@nestjs/common';
import {UsersModel} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {UsersDto} from "./users.dto";
import {where} from "sequelize";

@Injectable()
export class UsersService {
    constructor(@InjectModel(UsersModel) private UsersRepository: typeof UsersModel) {
    }


    async createUser(dto: UsersDto) {
        const user = await this.UsersRepository.create(dto)
        return user;
    }

    // async getAllUsers() {
    //     const products = await this.UsersRepository.findAll();
    //     return products;
    // }
    //
    async getOneUser(chatId: number) {
        const user = await this.UsersRepository.findOne({where:{chatId}});
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    //
    // async updateUser(id: number, dto: UsersDto) {
    //     const product = await this.UsersRepository.findOne({where:{id}});
    //     if (!product) {
    //         throw new Error('Product not found');
    //     }
    //     await product.update(dto);
    //     return dto;
    //
    // }
    //
    //
    // async deleteUser(id: number): Promise<void> {
    //     const product = await this.UsersRepository.findByPk(id);
    //     if (!product) {
    //         throw new Error('Product not found');
    //     }
    //     await product.destroy();
    // }
}
