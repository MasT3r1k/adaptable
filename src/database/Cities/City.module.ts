import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cities } from './City,entity';
import { CityService } from './City.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cities])],
  providers: [CityService],
  exports: [CityService]
})
export class CityModule {}
