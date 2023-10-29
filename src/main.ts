import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs";
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
const {
  networkInterfaces
} = require('os');


const nets = networkInterfaces();
const results = Object.create(null);

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }
      results[name].push(net.address);
    }
  }
}

async function bootstrap() {

  const key = fs.readFileSync("./ca.key").toString();
  const cert = fs.readFileSync("./ca.pem").toString();
  const httpsOptions: HttpsOptions = {
    key,
    cert,
    ciphers: 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384',
    honorCipherOrder: true,
    ca: 'TLSv1_2_method',
    rejectUnauthorized: false
  }; 
 
  const app = await NestFactory.create(AppModule, { httpsOptions, cors: { origin: '*' } });
  await app.listen(3000);
  console.log(Object.values(results)[0][0]);
}
bootstrap(); 