import { Component, HttpException } from 'nest.js';
import { db } from '../../db/sqlite';

@Component()
export class UsersService {


/*******************************************************
 * Get all Users
 *******************************************************/
    getAll() {
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

    findById(value: any) {
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