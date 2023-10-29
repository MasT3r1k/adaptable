import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassService } from './Class.service';
import { Class } from './Class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassService],
  exports: [ClassService]
})
export class ClassModule {}
