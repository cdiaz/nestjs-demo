import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

import { db } from '../../db/sqlite';

@Component()
export class UsersService {


/*******************************************************
 * Get all Users
 *******************************************************/
    getAllUsers() {
        return new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM user", function (err, users) {
                return !err ? 
                    resolve(users) :
                    reject(new HttpException(err, 500));
            });
        })
    }

/*******************************************************
 * Get One User by Id
 *******************************************************/

    getUser(value: any) {
        return new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM user WHERE id = ?", [value], (err, user) => {
                    return !err ? 
                        resolve(user[0]) :
                        reject(new HttpException(err, 500));
            });
        });
    }

}