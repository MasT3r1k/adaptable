import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tokens } from './Tokens.entity';
import { randomString } from 'src/functions/utils';
import * as bcrypt from 'bcrypt';
import { UserService } from '../Users/User.service';
import { User } from '../Users/User.entity';

export class TokensService {

  constructor(
    @InjectRepository(Tokens)
    private tokenRepository: Repository<Tokens>,
    private userService: UserService,
  ) {}
  
  countToken(token: string): Promise<number> {
    return this.tokenRepository.countBy({ token: token });
  }
  
  async generateToken(username: string): Promise<string> {
    let token = '';
    let userHash = await bcrypt.hash(username, 8);
    let tempToken = '';
    do {
      tempToken = userHash + randomString(32);
      let count = await this.countToken(tempToken);
      if (count === 0) {
        token = tempToken;
      }

    } while (token == '');
    return token;
  }

  async registerToken(token: string, userId: number, userAgent: string, expires: Date) {
    let user: User = await this.userService.findById(userId);
    if (!user) return;
    this.tokenRepository.insert({ token, userId: user, userAgent, expires: expires });
  }

  async getToken(token: string): Promise<Tokens> {
    let tokenEntity = await this.tokenRepository.findOne({
      relations: ['userId'],
      where: { token: token },
    });
    if (!tokenEntity) return;
    let expires = new Date(new Date().getTime() + 30 * 60 * 1000);
    await this.tokenRepository.update({ tokenId: tokenEntity.tokenId }, { expires: expires });
    return tokenEntity;
  }


}
