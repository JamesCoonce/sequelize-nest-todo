import { Todo } from './entity/todo.entity';

export const todosProviders = [
    {
        provide: 'TodosRepository',
        useValue: Todo,
    },
];