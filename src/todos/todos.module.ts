import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';

import { DatabaseModule } from '../database/database.module';
import { TodosService } from './todos.service';
import { todosProviders } from './todos.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [TodosService, ...todosProviders ],
})
export class TodosModule {}
