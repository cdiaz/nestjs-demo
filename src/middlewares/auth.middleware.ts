import { Middleware, NestMiddleware } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

@Middleware()
export class AuthMiddleware implements NestMiddleware {

    constructor() {}

    resolve() {

        return(req, res, next) => {

          if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            let token = req.headers.authorization.split(' ')[1];

            jwt.verify(token, 'mysecret', function(err, payload) {      
              
              if(!err) {
                //confirm identity and check user permissions
                req.payload = payload; 
                next();
              } 
              else {
                 return res.status(403).json(err);
              }
            })
          } else {
            return res.status(401).json("You must provide a valid authenticated access token.");
          }
        }
    }     
}