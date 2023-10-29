import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logincodes } from './loginCodes.entity';
import * as bcrypt from 'bcrypt';
import { OnModuleInit } from '@nestjs/common';

export class LoginCodesService implements OnModuleInit {

  constructor(
    @InjectRepository(Logincodes)
    private loginCodesRepository: Repository<Logincodes>
  ) {}

  async onModuleInit() {
    this.loginCodesRepository.clear();
  }

  countCode(code: string): Promise<number> {
    return this.loginCodesRepository.countBy({ QRCode: code });
  }

  async createCode(socket: string) {
    let code = await bcrypt.hash(socket, 8);
    return code;
  }

  async registerCode(socket: string): Promise<string> {
    let code = await this.createCode(socket);
    this.loginCodesRepository.insert({ QRCode: code, socketId: socket });
    return code;
  }

  removeCodeBySocket(socket: string): void {
    this.loginCodesRepository.delete({ socketId: socket });
  }
  

}
