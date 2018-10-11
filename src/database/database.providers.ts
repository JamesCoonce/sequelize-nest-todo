import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../todos/entity/todo.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'jamescoonce',
              password: '',
              database: 'nestTodo',
            });
            sequelize.addModels([Todo]);
            await sequelize.sync();
            return sequelize;
        },
    },
];