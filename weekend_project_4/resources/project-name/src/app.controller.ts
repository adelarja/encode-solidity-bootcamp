import { Controller, Get, Param, Put, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MintTokensDto } from './dtos/mintToken.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('other-thing')
  getOtherThing(): string {
    return this.appService.getAnotherThing();
  }

  @Get('get-address')
  getTokenAddress(): any {
    return this.appService.getTokenAddress();
  }

  @Get('get-total-supply')
  getTotalSupply(): Promise<bigint> {
    return this.appService.getTotalSupply();
  }

  @Get('get-token-balance/:address')
  getTokenBalance(@Param('address') address: string): Promise<bigint> {
    return this.appService.getTokenBalance(address);
  }

  @Post('mint-tokens')
  mintTokens(@Body() body: MintTokensDto): Promise<any> {
    return this.appService.mintTokens(body.address);
  }

  @Post('grant-role')
  grantRole(@Body() body: MintTokensDto): Promise<any> {
    return this.appService.grantRole(body.address);
  }
}
