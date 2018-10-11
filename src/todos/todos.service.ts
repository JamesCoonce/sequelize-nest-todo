import { Injectable, Inject} from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TodosRepository') private readonly todosRepository: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todosRepository.findAll<Todo>();
  }

  async findById(ID: number): Promise<Todo> {
    return await this.todosRepository.findById(ID);
  }
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todosRepository.create<Todo>(createTodoDto);
  }

  async update(id: number, newValue: CreateTodoDto): Promise<Todo | null> {

    let todo = await this.todosRepository.findById<Todo>(id);

    if (!todo.id) {
      // tslint:disable-next-line:no-console
      console.error('user doesn\'t exist');
    }

    todo = this._assign(todo, newValue);

    return await todo.save({ returning: true });
  }

  public async delete(ID: number): Promise<number> {

    return await this.todosRepository.destroy({
      where: { ID },
    });
  }

  private _assign(todo: CreateTodoDto, newValue: CreateTodoDto): Todo {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(todo['dataValues'])) {
      if (todo[key] !== newValue[key]) {
        //
        todo[key] = newValue[key];
      }
    }
    return todo as Todo;
  }
}