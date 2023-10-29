import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tokens } from './Tokens.entity';
import { TokensService } from './Tokens.service';
import { UserModule } from '../Users/User.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tokens]), UserModule],
  providers: [TokensService],
  exports: [TokensService]
})
export class TokensModule {}
