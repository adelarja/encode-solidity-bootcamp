import { ApiProperty } from '@nestjs/swagger';

export class MintTokensDto {
  @ApiProperty()
  address: string;
}
