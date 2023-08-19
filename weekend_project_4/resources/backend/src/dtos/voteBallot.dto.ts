import { IsNotEmpty, IsNumberString } from 'class-validator';

export class VoteBallotDto {
  @IsNotEmpty()
  ballotAddress: string;
  @IsNumberString()
  proposalNumber: number;
  @IsNumberString()
  amountOfVotes: number;
}
