import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentConnection } from './StudentConn.entity';
import { StudentConnService } from './StudentConn.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentConnection])],
  providers: [StudentConnService],
  exports: [StudentConnService]
})
export class StudentConnModule {}
