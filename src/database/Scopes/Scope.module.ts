import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scopes } from './Scope.entity';
import { ScopeService } from './Scope.service';

@Module({
  imports: [TypeOrmModule.forFeature([Scopes])],
  providers: [ScopeService],
  exports: [ScopeService]
})
export class ScopeModule {}
