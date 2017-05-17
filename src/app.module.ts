import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    modules: [ 
	    UsersModule,
	    AuthModule
    ]
})

export class ApplicationModule {}