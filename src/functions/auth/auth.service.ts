import { User } from "src/database/Users/User.entity";
import { UserService } from "src/database/Users/User.service";
import * as bcrypt from 'bcrypt';
import { TokensService } from "src/database/Tokens/Tokens.service";
import { Injectable } from "@nestjs/common";
import { LoginData } from "./auth.interface";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private tokenService: TokensService    
    ) {}

    isLogged(token: string | undefined) {
        return token != undefined;
    }

    
    async login(username: string, password: string, userAgent: string, callback?: Function): Promise<LoginData> {

        let user: User[] = await this.userService.findByUsername(username);
        if (!user[0]) {
            callback({ code: 401, message: 'not_user_found' });
            return;
        }

        let isSame: boolean = false;
        isSame = await bcrypt.compare(password, user[0].password);

        if (isSame == false) {
            callback({ code: 401, message: 'wrong_password' });
            return;
        }

        let token = await this.tokenService.generateToken(username);
        let expires = new Date(new Date().getTime() + (30 * 60 * 1000));

        this.tokenService.registerToken(token, user[0].userId, userAgent, expires);
        callback({ code: 200, message: 'login_done', token: token, expires: expires });

    }

}
