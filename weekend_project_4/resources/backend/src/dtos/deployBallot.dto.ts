import { ArrayNotEmpty, ArrayUnique, IsNotEmpty } from 'class-validator';

export class DeployBallotDto {
  @IsNotEmpty()
  address: string;
  @ArrayNotEmpty()
  @ArrayUnique()
  proposals: string[];
}
