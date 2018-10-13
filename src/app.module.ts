import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TodosService } from './todos/todos.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TodosModule, UsersModule],
  controllers: [AppController],
  providers: [ AppService ],
})
export class AppModule {}
