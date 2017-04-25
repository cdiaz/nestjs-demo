import { Module } from 'nest.js';
import { AuthController } from './auth.controller';
import { LoginService } from './login.service';
import { SignUpService } from './signup.service';
import { AuthHelper } from './auth.helper';

@Module({
    controllers: [ AuthController ],
    components: [ LoginService, SignUpService, AuthHelper ]
})

export class AuthModule {}