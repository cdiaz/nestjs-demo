import { Controller, Get, Post, Put, Delete, Request, Response, Body, Param, HttpStatus } from '@nestjs/common';

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
    public async getUser(@Response() res, 
                         @Param('id') id) 
    {
        const user = await this.usersService.getUser(id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async createUser(@Response() res, 
        				    @Body('username') username, 
    					    @Body('email') email, 
    					    @Body('password') password)
    {
        const result = await this.usersService.createUser(username, email, password);
        res.status(HttpStatus.CREATED).json(result);
    } 

    @Put('/:id')
    public async updateUser(@Response() res, 
                            @Param('id') id, 
        				    @Body('username') username, 
    					    @Body('email') email, 
    					    @Body('password') password,
                            @Body('role') role)
    {
        const result = await this.usersService.updateUser(id, username, email, password, role);
        res.status(HttpStatus.ACCEPTED).json(result);
    } 

    @Delete('/:id')
    public async deleteUser(@Response() res, 
        				    @Param('id') id)
    {
        const result = await this.usersService.deleteUser(id);
        res.status(HttpStatus.ACCEPTED).json(result);
    }    
}