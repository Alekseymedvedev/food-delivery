import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersService} from "./users.service";
import {UsersModel} from "./users.model";
import {UsersController} from "./users.controller";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports:[
        SequelizeModule.forFeature([UsersModel]),
    ]
})
export class UsersModule {}
