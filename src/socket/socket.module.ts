import { Module } from '@nestjs/common';
import { Gateway } from './socket.gateway';
import { AuthModule } from '../functions/auth/auth.module';
import { TokensModule } from 'src/database/Tokens/Tokens.module';
import { PersonModule } from 'src/database/Person/Person.module';
import { UserModule } from 'src/database/Users/User.module';
import { ScopeModule } from 'src/database/Scopes/Scope.module';
import { LogincodesModule } from 'src/database/QRcode/loginCodes.module';

@Module({
  providers: [Gateway],
  imports: [AuthModule, UserModule, TokensModule, PersonModule, ScopeModule, LogincodesModule]
})
export class GatewayModule {}