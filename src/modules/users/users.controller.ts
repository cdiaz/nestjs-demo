import { Controller, Dependencies, Get, Post } from 'nest.js';
import { UsersService } from "./users.service";

@Controller({ path: 'user' })
@Dependencies([ UsersService ])

export class UsersController {

    constructor(
        private usersService: UsersService,
    ) {}

    @Get()
    async getAll(req, res) {
        const users = await this.usersService.getAll();
        res.status(200).json(users);
    }

    @Get('/:id')
    async findById(req, res) {
        const users = await this.usersService.findById(req.params.id);
        res.status(200).json(users);
    }
    
}