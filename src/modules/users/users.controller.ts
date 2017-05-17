import { Controller, Get, Post, Request, Response, Param, HttpStatus } from '@nestjs/common';

import { UsersService } from "./users.service";

@Controller('user')

export class UsersController {

    constructor(
        private usersService: UsersService,
    ) {}

    @Get()
    public async getAllUsers(@Response() res) {
        const users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getUser(@Response() res, @Param('id') id) {
        const user = await this.usersService.getUser(id);
        res.status(HttpStatus.OK).json(user);
    }  
}