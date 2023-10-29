import { Module } from '@nestjs/common';
import configuration from './config';

@Module({
  providers: [
    {
      provide: 'CONFIG',
      useValue: configuration,
    },
  ],
  exports: ['CONFIG'],
})
export class ConfigModule {}