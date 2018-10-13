import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

import passportLocalSequelize from 'passport-local-sequelize';

const tableOptions: IDefineOptions = { timestamps: true } as IDefineOptions;
@Table(tableOptions)
export class User extends Model<User> {

}

passportLocalSequelize.attachToUser();