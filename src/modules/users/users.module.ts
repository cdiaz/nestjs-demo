import { Module, MiddlewaresConsumer, RequestMethod } from 'nest.js';
import { AuthMiddleware } from '../../middlewares/auth.middleware';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [ UsersController ],
    components: [ UsersService ]
})

export class UsersModule {
   configure(consumer: MiddlewaresConsumer) {
		consumer.apply(AuthMiddleware).forRoutes(UsersController)
	}
}