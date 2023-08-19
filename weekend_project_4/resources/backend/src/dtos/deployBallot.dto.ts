import { ArrayMinSize, ArrayUnique, IsNotEmpty } from 'class-validator';

export class DeployBallotDto {
  @IsNotEmpty()
  address: string;
  @ArrayMinSize(2)
  @ArrayUnique()
  proposals: string[];
}
