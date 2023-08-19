import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  InternalServerErrorException, HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MintTokensDto } from './dtos/mintToken.dto';
import { VoteBallotDto } from './dtos/voteBallot.dto';
import { DeployBallotDto } from './dtos/deployBallot.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('readyz')
  readyz(): string {
    return 'OK';
  }

  @Get('get-address')
  getTokenAddress(): any {
    return this.appService.getTokenAddress();
  }

  @Get('get-total-supply')
  async getTotalSupply(): Promise<bigint> {
    return this.appService.getTotalSupply();
  }

  @Get('get-token-balance/:address')
  async getTokenBalance(@Param('address') address: string): Promise<bigint> {
    return this.appService.getTokenBalance(address);
  }

  @Post('mint-tokens')
  @HttpCode(200)
  async mintTokens(@Body() body: MintTokensDto) {
    try {
      return await this.appService.mintTokens(body.address);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('grant-role')
  @HttpCode(200)
  async grantRole(@Body() body: MintTokensDto) {
    try {
      return await this.appService.grantRole(body.address);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('delegate')
  @HttpCode(200)
  async delegateVotes(@Body() body: MintTokensDto) {
    try {
      return await this.appService.delegateVotes(body.address);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('deploy-ballot')
  async deployTokenizedBallot(@Body() body: DeployBallotDto) {
    try {
      return await this.appService.deployTokenizedBallot(body.proposals, body.address);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('vote-proposal')
  @HttpCode(200)
  async voteProposal(@Body() body: VoteBallotDto) {
    try {
      return await this.appService.voteProposal(
        body.ballotAddress,
        body.proposalNumber,
        body.amountOfVotes,
      );
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
