import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  const regex = /^(0x[a-fA-F0-9]{40})$/;
  it('/get-address (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/get-address');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty(
      'address',
      expect.stringMatching(regex),
    );
  });
  it('/get-total-supply (GET)', async () => {
    const response = await request(app.getHttpServer()).get(
      '/get-total-supply',
    );
    expect(response.status).toEqual(200);
    expect(BigInt(response.text)).toBeGreaterThan(700000000000000000000n);
  });
  it('/get-token-balance (GET)', async () => {
    const response = await request(app.getHttpServer()).get(
      '/get-token-balance/0x583D98c6FA793B9eFF80674F9Dca1BBc7cc6F9F2',
    );
    expect(response.status).toEqual(200);
    expect(BigInt(response.text)).toBeGreaterThanOrEqual(100000000000000000000n);
  });
});
