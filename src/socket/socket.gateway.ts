import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
    SubscribeMessage,
    MessageBody,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { LoginCodesService } from 'src/database/QRcode/loginCodes.service';
import { ScopeService } from 'src/database/Scopes/Scope.service';
import { TokensService } from 'src/database/Tokens/Tokens.service';
import { UserService } from 'src/database/Users/User.service';
import { LoginData } from 'src/functions/auth/auth.interface';
import { AuthService } from 'src/functions/auth/auth.service';
  
type socketDataReceive = {
  method: string,
  keys: string[],
  values: any[]
}


@WebSocketGateway({
    cors: {
      origin: '*',
    },
    
})
export class Gateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  constructor(
    private authService: AuthService,
    private tokenService: TokensService,
    private userService: UserService,
    private scopeService: ScopeService,
    private loginCodes: LoginCodesService
    ) {
    }

  @WebSocketServer() server;

  async handleConnection(@ConnectedSocket() socket: Socket) {

    try {
      let tokenAuth = socket.handshake.auth.token;
      if (!tokenAuth) {
        let qrcode = await this.loginCodes.registerCode(socket.id);
        socket.emit('login-qrcode', qrcode);
        return;
      }
      let token = await this.tokenService.getToken(tokenAuth);
      if (!token) {
        socket.emit('token', { code: 401, message: "token_not_found" })
        return;
      }
      if (token.userAgent != socket.handshake.headers['user-agent']) {
        socket.emit('token', { code: 401, message: "other_useragent" });
        return;
      }
      let now = new Date().getTime();
      let expires = new Date(token.expires).getTime();
      if (now >= expires) {
        socket.emit('token', { code: 401, message: "token_expired" });
        return;
      }
  
      let user = await this.userService.findById(token.userId?.userId);
      if (!user) return socket.emit('token', { code: 401, message: "user_not_found" });
  
      socket.emit('token', {
        code: 200,
        message: 'Success',
        user: {
          type: user.type,
          locale: user.locale,
          firstName: user.personId.firstName,
          lastName: user.personId.lastName,
          sex: user.personId.sex
        }
      });
    } catch(e) {
      console.error('socket connect')
      console.error(e); 
    }

      

  }

  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    try {
      let tokenAuth = socket.handshake.auth.token;
      if (!tokenAuth) {
        this.loginCodes.removeCodeBySocket(socket.id);
        return;
      }  
    } catch(e) {
      console.error('socket disconnect')
      console.error(e)
    }
  }

  @SubscribeMessage('login')
  login(@ConnectedSocket() socket: Socket, @MessageBody() body) {
    try {
      let token = socket.handshake.auth.token;
      if (token) {
          socket.emit('login', { status: 'fail', message: 'already_logged' });
          return;
      }



      if (body.username == undefined || body.password == undefined) {
        socket.emit('login', { status: 'fail', message: 'failed_login' });
      }

      this.authService.login(body.username, body.password, socket.handshake.headers['user-agent'], (data: LoginData) => {
        socket.emit('login', data);
      });
    } catch(e) {
      console.error('login')
      console.error(e);
    }
  }

  @SubscribeMessage('sendData')
  async getData(@ConnectedSocket() socket: Socket, @MessageBody() body) {
    // Todo: CREATE FUNCTION TO CHECK TOKEN
    try {
      let token = socket.handshake.auth.token;
      if (!token) {
        socket.emit('token', { code: 401, message: "token_not_found" })
        return;
      }
  
      if (body.data == undefined) {
        return;
      }
  
      let data = body.data as socketDataReceive[];
      data.forEach((arr: socketDataReceive) => {
        if (!arr?.method) return;
        switch(arr.method) {
          case "create":
            
            break;
        } 
      })
    } catch(e) {
      console.error('sendData')
      console.error(e);
    }
    

  }

  @SubscribeMessage('getScopes')
  async getScopes(@ConnectedSocket() socket: Socket, @MessageBody() body) {

    try {

      let token = socket.handshake.auth.token;
      if (!token) {
        socket.emit('token', { code: 401, message: "token_not_found" })
        return;
      }
      
      let scopes = await this.scopeService.getAllScopes();
  
      socket.emit('gotScopes', scopes)

    } catch(e) {
      console.error('getScopes')
      console.error(e);
    }
    

  }


}