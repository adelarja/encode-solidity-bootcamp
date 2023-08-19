import { ApiProperty } from "@nestjs/swagger";

export class MintTokensDto {
    // @ApiProperty({type: string})
    address: string;
    proposals: string[];
}