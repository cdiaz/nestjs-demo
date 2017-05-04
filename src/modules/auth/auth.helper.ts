import * as jwt from 'jsonwebtoken';

export class AuthHelper {

/*******************************************************
 * Return a Jwt Token
 *******************************************************/
    genToken(user) {

		const token = {
		  token: jwt.sign({
		      id: user.id,
		      name: user.username,
		      email: user.email,
		      role: user.role,
		      exp: Math.round(new Date().getTime() / 1000) + 604800 // 1 week
		  },'mysecret')
		}

      return token;
  }
}