import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Gateway } from './socket/socket.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database/Users/User.entity';
import { UserModule } from './database/Users/User.module';
import { Tokens } from './database/Tokens/Tokens.entity';
import { TokensModule } from './database/Tokens/Tokens.module';
import { PersonModule } from './database/Person/Person.module';
import { Person } from './database/Person/Person.entity';
import { ScopeModule } from './database/Scopes/Scope.module';
import { Scopes } from './database/Scopes/Scope.entity';
import { Nationalities } from './database/Nationalities/Nationality.entity';
import { NationalityModule } from './database/Nationalities/Nationality.module';
import { CityModule } from './database/Cities/City.module';
import { Cities } from './database/Cities/City,entity';
import { AddressModule } from './database/Addresses/Address.module';
import { Addresses } from './database/Addresses/Address.entity';
import { StudentModule } from './database/Student/Student.module';
import { Student } from './database/Student/Student.entity';
import { Teacher } from './database/Teacher/Teacher.entity';
import { TeacherModule } from './database/Teacher/Teacher.module';
import { RoomModule } from './database/Room/Room.module';
import { SubjectModule } from './database/Subjects/Subject.module';
import { Subject } from './database/Subjects/Subject.entity';
import { Room } from './database/Room/Room.entity';
import { ClassModule } from './database/Classes/Class.module';
import { Class } from './database/Classes/Class.entity';
import { GroupModule } from './database/Group/Group.module';
import { Group } from './database/Group/Group.entity';
import { TeacherSubjectModule } from './database/Teacher/Subjects/TeacherSubject.module';
import { TeacherSubject } from './database/Teacher/Subjects/TeacherSubject.entity';
import { StudentConnModule } from './database/Student/Connection/StudentConn.module';
import { StudentConnection } from './database/Student/Connection/StudentConn.entity';
import { StudentGroupModule } from './database/Student/Group/StudentGroup.module';
import { StudentGroup } from './database/Student/Group/StudentGroup.entity';
import { Lesson } from './database/Lesson/Lesson.entity';
import { LessonModule } from './database/Lesson/Lesson.module';
import { LessonClassModule } from './database/Lesson/Class/LessonClass.module';
import { LessonClass } from './database/Lesson/Class/LessonClass.entity';
import { DegreeList } from './database/Degree/List/DegreeList.entity';
import { DegreeListModule } from './database/Degree/List/DegreeList.module';
import { DegreeModule } from './database/Degree/Degree.module';
import { Degree } from './database/Degree/Degree.entity';
import { AbsenceModule } from './database/Absence/Absence.module';
import { Absence } from './database/Absence/Absence.entity';
import { MarkColumns } from './database/Marks/Columns/MarkColumn.entity';
import { MarkColumnModule } from './database/Marks/Columns/MarkColumn.module';
import { MarkModule } from './database/Marks/Mark.module';
import { Marks } from './database/Marks/Mark.entity';
import { AttachmentsConnection } from './database/Attachments/Connection/AttachConn.entity';
import { AttachConnModule } from './database/Attachments/Connection/AttachConn.module';
import { AttachModule } from './database/Attachments/Attach.module';
import { Attachments } from './database/Attachments/Attach.entity';
import { HomeworkModule } from './database/Homework/Homework.module';
import { Homework } from './database/Homework/Homework.entity';
import { GatewayModule } from './socket/socket.module';
import config from './config';
import { Logincodes } from './database/QRcode/loginCodes.entity';
import { LogincodesModule } from './database/QRcode/loginCodes.module';

let database = config.database;

@Module({
  imports: [
    UserModule,
    TokensModule,
    GatewayModule,
    PersonModule,
    ScopeModule,
    NationalityModule,
    CityModule,
    AddressModule,
    StudentModule,
    StudentConnModule,
    StudentGroupModule,
    TeacherModule,
    TeacherSubjectModule,
    RoomModule,
    SubjectModule,
    ClassModule,
    GroupModule,
    LessonModule,
    LessonClassModule,
    DegreeModule,
    DegreeListModule,
    AbsenceModule,
    MarkModule,
    MarkColumnModule,
    AttachModule,
    AttachConnModule,
    HomeworkModule,
    LogincodesModule,
    
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: database.url,
      host: database.host,
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.databaseName,
      autoLoadEntities: true,
      logging: true,
      synchronize: false,
      retryAttempts: 5,
      retryDelay: 100,
      cache: true,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
