import { ApiProperty } from '@nestjs/swagger';

export class DeployBallotDto {
  @ApiProperty()
  address: string;
  @ApiProperty()
  proposals: string[];
}
