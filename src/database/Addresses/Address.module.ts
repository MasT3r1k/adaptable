import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Addresses } from './Address.entity';
import { AddressService } from './Address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Addresses])],
  providers: [AddressService],
  exports: [AddressService]
})
export class AddressModule {}
