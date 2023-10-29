import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logincodes } from './loginCodes.entity';
import { LoginCodesService } from './loginCodes.service';
import { TokensModule } from '../Tokens/Tokens.module';

@Module({
  imports: [TypeOrmModule.forFeature([Logincodes])],
  providers: [LoginCodesService],
  exports: [LoginCodesService]
})
export class LogincodesModule {}
