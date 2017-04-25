import { Controller, Dependencies, Get, Post } from 'nest.js';
import { LoginService } from "./login.service";
import { SignUpService } from "./signup.service";

@Controller({ path: 'auth' })
@Dependencies([ LoginService, SignUpService ])

export class AuthController {

    constructor(
        private loginService: LoginService,
        private signupService: SignUpService
    ) {}

    @Post('/login')
    async login(req, res) {
        const auth = await this.loginService.login(req.body.email, req.body.password);
        res.status(200).json(auth);
    }

}