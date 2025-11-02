import { Module } from '@nestjs/common';
import { PrismModule } from 'prisma/prisma.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
