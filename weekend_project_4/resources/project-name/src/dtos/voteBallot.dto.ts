import { ApiProperty } from "@nestjs/swagger";

export class VoteBallotDto {
    // @ApiProperty({type: string})
    ballotAddress: string;
    proposalNumber: number;
    amountOfVotes: number;
}