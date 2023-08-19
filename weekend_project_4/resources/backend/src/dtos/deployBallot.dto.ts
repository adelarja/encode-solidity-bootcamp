import { ArrayMinSize, ArrayUnique, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeployBallotDto {
  @ApiProperty()
  @IsNotEmpty()
  address: string;
  @ApiProperty()
  @ArrayMinSize(2)
  @ArrayUnique()
  proposals: string[];
}
