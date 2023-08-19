import { ApiProperty } from '@nestjs/swagger';

export class VoteBallotDto {
  @ApiProperty()
  ballotAddress: string;
  @ApiProperty()
  proposalNumber: number;
  @ApiProperty()
  amountOfVotes: number;
}
