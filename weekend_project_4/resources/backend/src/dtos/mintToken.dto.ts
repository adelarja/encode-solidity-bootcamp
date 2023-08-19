import { IsNotEmpty } from 'class-validator';

export class MintTokensDto {
  @IsNotEmpty()
  address: string;
}
