import { Controller, Dependencies, Get, Post, Request, Response, HttpStatus } from 'nest.js';
import { LoginService } from "./login.service";
import { SignUpService } from "./signup.service";

@Controller('auth')
@Dependencies([ LoginService, SignUpService ])

export class AuthController {

    constructor(
        private loginService: LoginService,
        private signupService: SignUpService
    ) {}

    @Post('/login')
    public async login(@Request() req, @Response() res) {
        const auth = await this.loginService.login(req.body.email, req.body.password);
        res.status(HttpStatus.OK).json(auth);
    }
}