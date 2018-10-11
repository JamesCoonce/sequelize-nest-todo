import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly text: string;

  @ApiModelProperty()
  readonly complete: boolean;
}
