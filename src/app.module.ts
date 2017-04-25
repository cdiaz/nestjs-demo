import { Module } from 'nest.js';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    modules: [ 
	    UsersModule,
	    AuthModule
    ]
})

export class ApplicationModule {}