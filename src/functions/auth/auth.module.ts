import { Module } from "@nestjs/common";
import { UserModule } from "src/database/Users/User.module";
import { AuthService } from "./auth.service";
import { TokensModule } from "src/database/Tokens/Tokens.module";

@Module({
    imports: [UserModule, TokensModule],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}