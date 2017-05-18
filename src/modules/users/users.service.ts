import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as uuid from 'uuid';

import { db } from '../../db/sqlite';

@Component()
export class UsersService {


/*******************************************************
 * Get all Users
 *******************************************************/
    public getAllUsers() {
        return new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM user", function (err, rows) {
                return !err ? 
                    resolve(rows) :
                    reject(new HttpException(err, 500));
            });
        })
    }

/*******************************************************
 * Get One User by Id
 *******************************************************/

    public getUser(value: any) {
        return new Promise((resolve, reject) => {
            db.get(
                "SELECT * FROM user WHERE id = ?", [value], (err, row) => {
                    return !err ? 
                        resolve(row) :
                        reject(new HttpException(err, 500));
            });
        });
    }

/*******************************************************
 * Create User
 *******************************************************/

    public createUser(username: String, email: String, password: String) {
        return new Promise((resolve, reject) => {
            db.run(
                "INSERT INTO user (id, username, email, password, role)" +
                "VALUES (?, ?, ?, ?, 'user')", [uuid.v1().replace(/-/g, ""), username, email, password], (err) => {
                    return !err ? 
                        resolve({'message':'User has been registered'}) :
                        reject(new HttpException(err, 500));
            });
        });
    }

/*******************************************************
 * Update User
 *******************************************************/

    public updateUser(id: String, username: String, email: String, password: String, role: String) {
        return new Promise((resolve, reject) => {
            db.run(
                "UPDATE user SET username=?, email=?, password=?, role=?"+
                "WHERE(id = ?);",[username, email, password, role, id], (err) => {
                    return !err ? 
                        resolve({'message': 'User ' + id + ' has been updated successfully'}) :
                        reject(new HttpException(err, 500));
            });
        });
    }

/*******************************************************
 * Delete User
 *******************************************************/

    public deleteUser(id: String) {
        return new Promise((resolve, reject) => {
            db.run(
                "DELETE From user WHERE id = ?", [id], (err) => {
                    return !err ? 
                        resolve({'message':'User ' + id + ' has been deleted'}) :
                        reject(new HttpException(err, 500));
            });
        });
    }
}